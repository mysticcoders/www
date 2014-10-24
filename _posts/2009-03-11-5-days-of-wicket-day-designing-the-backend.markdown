---
layout: post
status: publish
published: true
title: '5 Days of Wicket - Designing the backend '
author:
  display_name: Guillermo Castro
  login: javageek
  email: gcastro@mysticcoders.com
  url: http://javageek.org
author_login: javageek
author_email: gcastro@mysticcoders.com
author_url: http://javageek.org
wordpress_id: 182
wordpress_url: http://www.mysticcoders.com/blog/?p=182
date: '2009-03-11 09:00:05 +0000'
date_gmt: '2009-03-11 16:00:05 +0000'
tags: []
comments: true
---
As mentioned in <a href="http://www.mysticcoders.com/blog/2009/03/10/5-days-of-wicket-writing-the-tests/">day 2</a> of our series, we have a main service interface that came from an initial discussion of what we think a pastebin should do.&Acirc;&nbsp;What can be easier than creating an entity model for a pastebin application, right? It's just a big text area that holds a piece of text (content) that someone wants to share with the rest of the world, or at least with someone else who might be interested in looking at it. However, there are some specific things that we wanted to accomplish in our application that came from a series of ideas by the different team members. Of course, although not really a requirement, we wanted to build this application using <a href="http://wicket.apache.org/" target="_blank">Apache Wicket</a>.<br />
<a id="more"></a><a id="more-182"></a>

<h1>Requirements</h1><br />
Here is a list of the ideas (or requirements) we wanted for our pastebin, in no particular order:

<ul>
<li>A paste item must be identified by a unique id and/or timestamp, and it should contain text and optionally a language identifier (useful for syntax highlighting).</li>
<li>A Paste item may be a Reply of another Paste item (can have a parent item).</li>
<li>A Paste item may have one or more replies (children items).</li>
<li>A Paste item may be private. Private items will be identified by a special random string token of a defined length.</li>
<li>A Paste item may be associated with a specific user (author).</li>
<li>A given author that has been identified to the system will be able to see all the paste items that he/she created.</li><br />
</ul>

<h1>Models/Entities</h1><br />
From the set of requirements we can get a sense of how the entities are going to be created and how they're going to relate to each other, as seen in the following diagram:

<img class="aligncenter size-full wp-image-425" title="Class Diagram" src="http://www.mysticcoders.com/wp-content/uploads/2009/03/class-diagram.png" alt="Class Diagram" width="452" height="194" />

This looks like a very simple entity model, but it fits with what we want to accomplish for this particular project. During the brainstorming session many features were discussed, like the ability to edit and/or delete an item that you own (identified by some session token saved in a cookie), the ability to upload images, have an API for external clients that want access to the pastebin, etc. This might be implemented in the future, but were omitted for the first iteration of the project. However, some of the basis for the functionalities is there, like having a client token to identify the different clients accessing the server and be able to show them in the future.

So now that we have a base, let's get to do some actual coding. As mentioned before, we decided on using <a href="http://www.hibernate.org/" target="_blank">Hibernate</a> as our ORM mapping. This is how we define the PasteItem class (the getters and setters have been omitted from the class to make it easier to read):

<pre lang="java">import javax.persistence.Basic;<br />
import javax.persistence.Column;<br />
import javax.persistence.Entity;<br />
import static javax.persistence.EnumType.STRING;<br />
import javax.persistence.Enumerated;<br />
import javax.persistence.FetchType;<br />
import javax.persistence.GeneratedValue;<br />
import javax.persistence.GenerationType;<br />
import javax.persistence.Id;<br />
import javax.persistence.JoinColumn;<br />
import javax.persistence.Lob;<br />
import javax.persistence.ManyToOne;<br />
import javax.persistence.NamedQueries;<br />
import javax.persistence.NamedQuery;<br />
import javax.persistence.OneToMany;<br />
import javax.persistence.Table;<br />
import javax.persistence.Temporal;<br />
import javax.persistence.TemporalType;<br />
import java.io.Serializable;<br />
import java.util.ArrayList;<br />
import java.util.Date;<br />
import java.util.List;

@Entity<br />
@NamedQueries({@NamedQuery(name = "item.getById", query = "from PasteItem item where item.id = :id"),<br />
        @NamedQuery(name = "item.find",<br />
                query = "from PasteItem item where item.isPrivate != true order by item.timestamp desc"),<br />
        @NamedQuery(name = "item.findThreaded",<br />
                query = "from PasteItem item where item.isPrivate != true and item.parent is null order by item.timestamp desc"),<br />
        @NamedQuery(name = "item.findByLanguage",<br />
                query = "from PasteItem item where item.isPrivate != true and item.type = :type order by item.timestamp desc"),<br />
        @NamedQuery(name = "item.findByLanguageThreaded",<br />
                query = "from PasteItem item where item.isPrivate != true and item.parent is null and item.type = :type order by item.timestamp desc"),<br />
        @NamedQuery(name = "item.findByToken", query = "from PasteItem item where item.privateToken = :token"),<br />
        @NamedQuery(name = "item.findByUser",<br />
                query = "from PasteItem item where item.isPrivate != true and item.userToken = :token"),<br />
        @NamedQuery(name = "item.count", query = "select count(*) from PasteItem item where item.isPrivate != true")})<br />
public class PasteItem implements Serializable {<br />
    @Id @GeneratedValue(strategy = GenerationType.AUTO)<br />
    protected long id;

    @Lob<br />
    protected String content;

    @Enumerated(STRING)<br />
    protected LanguageType type;

    @Temporal(TemporalType.TIMESTAMP)<br />
    protected Date timestamp;

    @Basic<br />
    protected String userToken;

    @Basic<br />
    protected String clientToken;

    @Basic<br />
    protected boolean isPrivate;

    @Basic<br />
    @Column(name = "PRIVATE_TOKEN", unique = true, updatable = false)<br />
    protected String privateToken;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)<br />
    @JoinColumn(name = "PARENT_ITEM_ID", nullable = true)<br />
    protected PasteItem parent;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parent")<br />
    protected List<PasteItem> children;<br />
    ...<br />
}</pre><br />
We are using annotations to define our entity model. The interesting part here is that we didn't use any <a href="http://www.hibernate.org/397.html" target="_blank">Hibernate-specific annotations</a>, and instead relied on the standard ones from the <a href="http://java.sun.com/developer/technicalArticles/J2EE/jpa/" target="_blank">JPA API</a>. Hibernate understands these annotations so it seems logical to use them because then we can make the application more portable, as we could replace Hibernate for any JPA-enabled library. Also, another great feature of JPA is that we can define a set of named queries that our Dao implementations can use. This allows you to define almost anything that's related to the persistence layer under one class, like the entity, its properties and the different ways to access the entity via queries under one place, which then becomes your main reference class.

<h1>Service layer</h1><br />
We defined a primary service interface that the Wicket front-end will use to interact between the web pages and the rest of the application. The service layer classes are usually responsible for implementing the required business rules of the application, and they can be as complex or as simple as required, depending on what the actual requirements of the application are. Wikipedia defines a <a href="http://en.wikipedia.org/wiki/Business_rule" target="_blank">business rule</a> as:

<blockquote><strong>Business rule</strong> is a statement that defines or constrains some aspect of the business. It is intended to assert business structure or to control or influence the behavior of the business. Individual business rules that describe the same facet of an enterprise are usually arranged into&Acirc;&nbsp;<strong>business rulesets</strong>. Business rules describe the operations, definitions and constraints that apply to an organization in achieving its goals.</blockquote><br />
In layman's terms, a business rule is anything that affects the way we act on our data. This is how our service implementation looks like:

<pre lang="java">import com.mysticcoders.mysticpaste.model.LanguageType;<br />
import com.mysticcoders.mysticpaste.model.PasteItem;<br />
import com.mysticcoders.mysticpaste.persistence.PasteItemDao;<br />
import com.mysticcoders.mysticpaste.utils.TokenGenerator;<br />
import org.slf4j.Logger;<br />
import org.slf4j.LoggerFactory;<br />
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;<br />
import java.util.Date;<br />
import java.util.List;

public class PasteServiceImpl implements PasteService {<br />
    private final Logger logger = LoggerFactory.getLogger(getClass());

    public static final int DEFAULT_TOKEN_LENGTH = 10;

    private PasteItemDao itemDao;

    private int tokenLength;

    public PasteServiceImpl() {<br />
        this.tokenLength = DEFAULT_TOKEN_LENGTH;<br />
    }

    public PasteServiceImpl(PasteItemDao itemDao, int tokenLength) {<br />
        this.itemDao = itemDao;<br />
        this.tokenLength = tokenLength;<br />
    }

    @Transactional(readOnly = true)<br />
    public List<PasteItem> getLatestItems(String clientToken, int count, int startIndex, boolean threaded)<br />
            throws InvalidClientException {<br />
        logger.trace("Service: getLatestItems. clientToken = {}, count = {}, startIndex = {}, threaded = {}",<br />
                new Object[]{clientToken, count, startIndex, threaded});<br />
        List<PasteItem> results = null;<br />
        if (threaded) {<br />
            results = itemDao.findThreaded(count, startIndex);<br />
        } else {<br />
            results = itemDao.find(count, startIndex);<br />
        }

        if (null == results) {<br />
            logger.warn("Found no items in database.");<br />
            results = new ArrayList<PasteItem>();<br />
        }<br />
        return results;<br />
    }

    @Transactional(readOnly = true)<br />
    public PasteItem getItem(String clientToken, long id) throws InvalidClientException {<br />
        return itemDao.get(id);<br />
    }

    @Transactional(readOnly = true)<br />
    public PasteItem findPrivateItem(String clientToken, String privateToken) throws InvalidClientException {<br />
        return itemDao.findByToken(privateToken);<br />
    }

    @Transactional(readOnly = true)<br />
    public List<PasteItem> findItemsByLanguage(String clientToken, LanguageType languageType, int count,<br />
                                               int startIndex, boolean threaded)<br />
            throws InvalidClientException {

        List<PasteItem> results = null;<br />
        if (threaded) {<br />
            results = itemDao.findByLanguageThreaded(languageType, count, startIndex);<br />
        } else {<br />
            results = itemDao.findByLanguage(languageType, count, startIndex);<br />
        }<br />
        if (null == results) {<br />
            results = new ArrayList<PasteItem>();<br />
        }<br />
        return results;<br />
    }

    @Transactional(rollbackFor = Exception.class)<br />
    public long createItem(String clientToken, PasteItem item) throws InvalidClientException {<br />
        if (null != item &amp;&amp; item.isPrivate()) {<br />
            item.setPrivateToken(TokenGenerator.generateToken(getTokenLength()));<br />
        }<br />
        // set created Timestamp<br />
        item.setTimestamp(new Date(System.currentTimeMillis()));<br />
        return itemDao.create(item);<br />
    }

    public long getLatestItemsCount(String clientToken) throws InvalidClientException {<br />
        return itemDao.getPasteCount();<br />
    }

    public PasteItemDao getItemDao() {<br />
        return itemDao;<br />
    }

    public void setItemDao(PasteItemDao itemDao) {<br />
        this.itemDao = itemDao;<br />
    }

    public int getTokenLength() {<br />
        return tokenLength;<br />
    }

    public void setTokenLength(int tokenLength) {<br />
        this.tokenLength = tokenLength;<br />
    }<br />
}</pre><br />
The business rules for the pastebin are very light in nature. One of the business rule we have from the requirements is to generate a random string token to use as the private paste identifier, so that instead of having a sequential id (which can be guessed), it is identified by this string and a special url.

We're using <a href="http://www.slf4j.org/" target="_blank">slf4j</a> as our logging mechanism. This allows us to statically map our logging to one of log4j, jdk, etc., and it also allows us to have very simple logging messages that will help us 'debug' the application in a sense. Nowadays it is considered bad practice to use <em>System.out.println()</em> messages as we don't have control over them (i.e. they will always appear). Having a logging mechanism with separate message levels allows us to control what we want to show.

It is also interesting to note that in order to support a transactional set of methods, we used Spring's <a href="http://static.springsource.org/spring/docs/2.5.1/api/org/springframework/transaction/annotation/Transactional.html" target="_blank">@Transactional</a> annotation. This annotation allows us to mark a method (and its underlying method calls) as part of one transaction, and optionally to mark said transaction as read-only. Also, take care that marking a method as transactional is often not enough, as we have to specify under which conditions the transaction needs to rollback (in our case, every time an exception is thrown). This is because by default, spring only rolls back transactions when <strong>runtime</strong> exceptions are thrown.

<h1>Persistence layer</h1><br />
Since we are using Hibernate, our persistence layer becomes a really easy, thin layer. Here's our Dao implementation:

<pre lang="java">import com.mysticcoders.mysticpaste.model.LanguageType;<br />
import com.mysticcoders.mysticpaste.model.PasteItem;<br />
import com.mysticcoders.mysticpaste.persistence.PasteItemDao;

import java.util.List;

public class PasteItemDaoImpl extends AbstractDaoHibernate<PasteItem> implements PasteItemDao {

    protected PasteItemDaoImpl() {<br />
        super(PasteItem.class);<br />
    }

    public Long create(PasteItem item) {<br />
        save(item);<br />
        return item.getId();<br />
    }

    public PasteItem get(long id) {<br />
        PasteItem item = (PasteItem) getSession().getNamedQuery("item.getById")<br />
                .setLong("id", id).setMaxResults(1)<br />
                .uniqueResult();<br />
        return item;<br />
    }

    public List<PasteItem> findByLanguage(LanguageType languageType, int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findByLanguage")<br />
                .setParameter("type", languageType)<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }

    public List<PasteItem> findByLanguageThreaded(LanguageType languageType, int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findByLanguageThreaded")<br />
                .setParameter("type", languageType)<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }

    public List<PasteItem> find(int count, int startIndex) {<br />
        return getSession().getNamedQuery("item.find")<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }

    public List<PasteItem> findThreaded(int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findThreaded")<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }

    public PasteItem findByToken(String privateToken) {<br />
        return (PasteItem) getSession()<br />
                .getNamedQuery("item.findByToken")<br />
                .setParameter("token", privateToken)<br />
                .uniqueResult();<br />
    }

    public long getPasteCount() {<br />
        Long count = (Long) getSession()<br />
                .getNamedQuery("item.count")<br />
                .setMaxResults(1).uniqueResult();<br />
        return null == count ? 0 : count;<br />
    }<br />
}</pre><br />
We have taken advantage of JPA's <a href="http://java.sun.com/javaee/5/docs/api/javax/persistence/NamedQuery.html" target="_blank">@NamedQuery</a> annotation to greatly simplify the code in our Dao implementation. Since all the queries for accessing a PasteItem were already defined inside the entity (in our case, the PasteItem class), we only need to refer to those queries here, set the named parameters and get the results.

We also defined an abstract class to "generify" (term borrowed from IDEA's inspection) Hibernate's access:

<pre lang="java">import org.hibernate.Session;<br />
import org.hibernate.SessionFactory;<br />
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import java.io.Serializable;

public class AbstractDaoHibernate<T> extends HibernateDaoSupport {<br />
    private Class entityClass;

    private SessionFactory sessionFactory;

    protected AbstractDaoHibernate(Class dataClass) {<br />
        super();<br />
        this.entityClass = dataClass;<br />
    }

    @SuppressWarnings("unchecked")<br />
    private T load(Long id) {<br />
        return (T) getSession().get(entityClass, id);<br />
    }

    @SuppressWarnings("unchecked")<br />
    private T loadChecked(Long id) throws EntityNotFoundException {<br />
        T persistedObject = load(id);

        if (persistedObject == null) {<br />
            throw new EntityNotFoundException(entityClass, id);<br />
        }<br />
        return persistedObject;<br />
    }

    public void merge(T detachedObject) {<br />
        getSession().merge(detachedObject);<br />
    }

    public void save(T persistedObject) {<br />
        getSession().saveOrUpdate(persistedObject);<br />
    }

    private void delete(T persistedObject) {<br />
        getSession().delete(persistedObject);<br />
    }

    public void delete(Long id) {<br />
        delete(loadChecked(id));<br />
    }<br />
}</pre><br />
This class takes advantage of Java 5 generics in order to implement the common persistence methods that we have. It also extends Spring's <a href="http://static.springsource.org/spring/docs/2.5.x/api/org/springframework/orm/hibernate3/support/HibernateDaoSupport.html" target="_blank">HibernateDaoSupport</a> to make it easier to integrate with Spring.

<h1>Wiring everything together</h1><br />
Once we have the service and the persistence layer, we need a way to put everything together in order for our application to work. Since we are using Spring, we only need to define our beans in the applicationContext.xml:

<pre lang="xml">
<?xml version="1.0" encoding="UTF-8"?><br />
<beans xmlns="http://www.springframework.org/schema/beans"<br />
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<br />
       xmlns:tx="http://www.springframework.org/schema/tx"<br />
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">

    <!-- Services Beans --><br />
    <bean id="pasteService" class="com.mysticcoders.mysticpaste.services.PasteServiceImpl">

<property name="itemDao" ref="pasteItemDao"/>
<property name="tokenLength" value="${private.token.length}" />
    </bean>

    <!-- DAOs --><br />
    <bean id="pasteItemDao" class="com.mysticcoders.mysticpaste.persistence.hibernate.PasteItemDaoImpl">

<property name="sessionFactory" ref="sessionFactory"/>
    </bean>

    <!-- Wicket Application --><br />
    <bean id="wicketApplication" class="com.mysticcoders.mysticpaste.MysticPasteApplication"/>

    <!--  Database Beans --><br />
    <bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close">

<property name="driverClassName" value="${jdbc.driver}"/>
<property name="url" value="${jdbc.url}"/>
<property name="username" value="${jdbc.username}"/>
<property name="password" value="${jdbc.password}"/>
    </bean>

    <!-- Hibernate session factory --><br />
    <bean id="sessionFactory"<br />
          class="org.springframework.orm.hibernate3.annotation.AnnotationSessionFactoryBean">

<property name="dataSource" ref="dataSource"/>
<property name="hibernateProperties">
<props>
<prop key="hibernate.dialect">${hibernate.dialect}</prop>

<prop key="hibernate.show_sql">${hibernate.show_sql}</prop>

<prop key="use_outer_join">${hibernate.use_outer_join}</prop>

<prop key="hibernate.cache.use_second_level_cache">${hibernate.cache.use_second_level_cache}</prop>

<prop key="hibernate.cache.use_query_cache">${hibernate.cache.use_query_cache}</prop>

<prop key="hibernate.cache.provider_class">${hibernate.cache.provider}</prop>

<prop key="hibernate.connection.pool_size">10</prop>

<prop key="hibernate.jdbc.batch_size">1000</prop>

<prop key="hibernate.bytecode.use_reflection_optimizer">true</prop>

            </props><br />
        </property>

<property name="annotatedClasses">
<list>
                <value>com.mysticcoders.mysticpaste.model.PasteItem</value><br />
            </list><br />
        </property>

<property name="schemaUpdate" value="${hibernate.schemaUpdate}"/>
    </bean>

    <!-- Tell Spring it should use @Transactional annotations --><br />
    <tx:annotation-driven/>

    <bean id="transactionManager"<br />
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">

<property name="sessionFactory" ref="sessionFactory"/>
    </bean><br />
</beans></pre><br />
The Service is configured as a bean, with a reference to the Dao implementation and to a variable that will be replaced by maven when building for the appropriate platform, as mentioned in <a href="http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket-day-1/">day 1</a>. The Dao is configured with a reference to Hibernate's <em>sessionFactory</em> bean, and the rest is the configuration for Hibernate (the data source, the transaction manager, etc.).<br />
Since we're using annotations, we need to set the property <em>annotatedClasses</em> with a list of the Hibernate (or JPA) configured entity classes, in this case the PasteItem class. In order for the @Transactional annotation to work we need to tell Spring that our transaction is driven by those annotations with the <strong><tx:annotation-driven/></strong> tag. I've been involved in previous projects where the other developers think they are doing transactions because they used the annotation, but forgot to add this piece to the configuration, thus resulting in database inconsistencies. 

<h1>Conclusion</h1><br />
Designing the backend involves very little Wicket (or nothing at all as we saw here), but it's very important to separate our different layers to make the application easier to maintain. Using Spring and Hibernate is win-win situation because we leave many configuration options to Spring, and we are able to provide an easy to use and easy to understand implementation of our service and persistence layer.

<strong>EDIT:</strong> Added the wicketApplication bean to the Spring configuration file.

