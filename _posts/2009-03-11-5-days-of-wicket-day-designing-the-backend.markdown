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
excerpt: "As mentioned in <a href=\"http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;10&#47;5-days-of-wicket-writing-the-tests&#47;\">day
  2<&#47;a> of our series, we have a main service interface that came from an initial
  discussion of what we think a pastebin should do.&Acirc;&nbsp;What can be easier
  than creating an entity model for a pastebin application, right? It's just a big
  text area that holds a piece of text (content) that someone wants to share with
  the rest of the world, or at least with someone else who might be interested in
  looking at it. However, there are some specific things that we wanted to accomplish
  in our application that came from a series of ideas by the different team members.
  Of course, although not really a requirement, we wanted to build this application
  using <a href=\"http:&#47;&#47;wicket.apache.org&#47;\" target=\"_blank\">Apache
  Wicket<&#47;a>.\r\n"
wordpress_id: 182
wordpress_url: http://www.mysticcoders.com/blog/?p=182
date: '2009-03-11 09:00:05 +0000'
date_gmt: '2009-03-11 16:00:05 +0000'
categories:
- Apache Wicket
tags:
- Apache Wicket
comments:
- id: 263
  author: JavaGeek.org
  author_email: ''
  author_url: http://javageek.org/
  date: '2009-03-11 09:15:07 +0000'
  date_gmt: '2009-03-11 16:15:07 +0000'
  content: "<strong>5 Days of Wicket - Designing the backend...<&#47;strong>\r\n\r\n
    5 Days of Wicket - Designing the backend is an article written by yours truly
    as part of a series of articles geared towards the better understanding of how
    to create a web application using Apache Wicket. Enjoy.   (You can read a short
    introduction t..."
- id: 266
  author: Rodolfo Ruiz
  author_email: rpruiz@gmail.com
  author_url: ''
  date: '2009-03-11 10:21:35 +0000'
  date_gmt: '2009-03-11 17:21:35 +0000'
  content: "Nest time you might want to try ruby and active_record for your ORM needs.
    \ All it needs is something like this to recreate your desired functionality (plus
    the migration file, which is the place where you declared your variables, its
    type and its relation to other tables)\r\n\r\npastebin.rb\r\nhas_many :pb_siblings\r\n\r\npb_siblings.rb\r\nbelongs_to
    :pastebin\r\n\r\nand then:\r\n\r\nclass Pastebin < ActiveRecord:Base\r\nend\r\n\r\n&amp;\r\n\r\nclass
    PBSiblings < ActiveRecord:Base\r\nend\r\n\r\nOnce you have this, you can use all
    the functionality you implemented by hand using your DAOs"
- id: 267
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-03-11 10:47:05 +0000'
  date_gmt: '2009-03-11 17:47:05 +0000'
  content: Likewise, I've always thought RoR should have a framework like Wicket.  Or
    does it?  Since using Wicket, RoR kinda just seems like what we were doing back
    in the days of JSPs.  That is how does a designer properly edit a RoR page?  Or
    are there techniques which allow them to edit pages in their favourite editor
    without having to know Ruby?
- id: 268
  author: Guillermo Castro
  author_email: gcastro@mysticcoders.com
  author_url: http://javageek.org/
  date: '2009-03-11 11:03:32 +0000'
  date_gmt: '2009-03-11 18:03:32 +0000'
  content: I'm pretty sure Ruby has its advantages, simplicity being one of them,
    but I think you're missing the point of the article, which is to set up the basis
    for a Wicket application, which is Java-based. If we were discussing RoR or another
    Ruby-based framework, I'd be glad to look at how Ruby does things.
- id: 269
  author: Korbinian Bachl
  author_email: korbinian.bachl@whiskyworld.de
  author_url: ''
  date: '2009-03-12 05:06:00 +0000'
  date_gmt: '2009-03-12 12:06:00 +0000'
  content: "In your applicationContext.xml you miss the bean for the wicketWebApplication
    class; As this is a tutorial situation you should include it else everyone who
    starts it up will see an error that i can't be found.\r\n\r\nBest"
- id: 271
  author: Guillermo Castro
  author_email: gcastro@mysticcoders.com
  author_url: http://javageek.org
  date: '2009-03-12 09:38:42 +0000'
  date_gmt: '2009-03-12 16:38:42 +0000'
  content: Well, this is a series of tutorials, with each one building on the previous
    one. But I added the wicketApplication to the context anyway. Thanks for your
    comment.
- id: 272
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-03-12 10:12:53 +0000'
  date_gmt: '2009-03-12 17:12:53 +0000'
  content: 'FYI: Steve''s entry on day 4 will cover the WicketApplication class and
    how to wire it.'
- id: 273
  author: Korbinian Bachl
  author_email: korbinian.bachl@whiskyworld.de
  author_url: ''
  date: '2009-03-12 12:09:09 +0000'
  date_gmt: '2009-03-12 19:09:09 +0000'
  content: "Thanks for letting me know. However, when I turn back the time-wheel to
    the point where I was completely new to wicket and I come over a tutorial (even
    a series) I rather did a hit on the \"run\" button than wait for another day to
    see whats going on :)\r\n\r\nBest"
- id: 274
  author: Korbinian Bachl
  author_email: korbinian.bachl@whiskyworld.de
  author_url: ''
  date: '2009-03-12 12:14:18 +0000'
  date_gmt: '2009-03-12 19:14:18 +0000'
  content: 'PS: not sure about this completely, but AFAIK the wicketApplication class
    bean should be the *last* bean that is added in the applicationContext.xml as
    there could be situations where a too early startup of the wicketApplication class
    would fail as not all resources are 100% available in that case;'
- id: 275
  author: mystic blog &raquo; 5 Days of Wicket!
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/
  date: '2009-03-12 15:16:03 +0000'
  date_gmt: '2009-03-12 22:16:03 +0000'
  content: "[...] Day 3 - Designing the backend [...]"
---
<p>As mentioned in <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;10&#47;5-days-of-wicket-writing-the-tests&#47;">day 2<&#47;a> of our series, we have a main service interface that came from an initial discussion of what we think a pastebin should do.&Acirc;&nbsp;What can be easier than creating an entity model for a pastebin application, right? It's just a big text area that holds a piece of text (content) that someone wants to share with the rest of the world, or at least with someone else who might be interested in looking at it. However, there are some specific things that we wanted to accomplish in our application that came from a series of ideas by the different team members. Of course, although not really a requirement, we wanted to build this application using <a href="http:&#47;&#47;wicket.apache.org&#47;" target="_blank">Apache Wicket<&#47;a>.<br />
<a id="more"></a><a id="more-182"></a></p>
<h1>Requirements<&#47;h1><br />
Here is a list of the ideas (or requirements) we wanted for our pastebin, in no particular order:</p>
<ul>
<li>A paste item must be identified by a unique id and&#47;or timestamp, and it should contain text and optionally a language identifier (useful for syntax highlighting).<&#47;li>
<li>A Paste item may be a Reply of another Paste item (can have a parent item).<&#47;li>
<li>A Paste item may have one or more replies (children items).<&#47;li>
<li>A Paste item may be private. Private items will be identified by a special random string token of a defined length.<&#47;li>
<li>A Paste item may be associated with a specific user (author).<&#47;li>
<li>A given author that has been identified to the system will be able to see all the paste items that he&#47;she created.<&#47;li><br />
<&#47;ul></p>
<h1>Models&#47;Entities<&#47;h1><br />
From the set of requirements we can get a sense of how the entities are going to be created and how they're going to relate to each other, as seen in the following diagram:</p>
<p><img class="aligncenter size-full wp-image-425" title="Class Diagram" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;class-diagram.png" alt="Class Diagram" width="452" height="194" &#47;></p>
<p>This looks like a very simple entity model, but it fits with what we want to accomplish for this particular project. During the brainstorming session many features were discussed, like the ability to edit and&#47;or delete an item that you own (identified by some session token saved in a cookie), the ability to upload images, have an API for external clients that want access to the pastebin, etc. This might be implemented in the future, but were omitted for the first iteration of the project. However, some of the basis for the functionalities is there, like having a client token to identify the different clients accessing the server and be able to show them in the future.</p>
<p>So now that we have a base, let's get to do some actual coding. As mentioned before, we decided on using <a href="http:&#47;&#47;www.hibernate.org&#47;" target="_blank">Hibernate<&#47;a> as our ORM mapping. This is how we define the PasteItem class (the getters and setters have been omitted from the class to make it easier to read):</p>
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
import java.util.List;</p>
<p>@Entity<br />
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
    protected long id;</p>
<p>    @Lob<br />
    protected String content;</p>
<p>    @Enumerated(STRING)<br />
    protected LanguageType type;</p>
<p>    @Temporal(TemporalType.TIMESTAMP)<br />
    protected Date timestamp;</p>
<p>    @Basic<br />
    protected String userToken;</p>
<p>    @Basic<br />
    protected String clientToken;</p>
<p>    @Basic<br />
    protected boolean isPrivate;</p>
<p>    @Basic<br />
    @Column(name = "PRIVATE_TOKEN", unique = true, updatable = false)<br />
    protected String privateToken;</p>
<p>    @ManyToOne(fetch = FetchType.LAZY, optional = true)<br />
    @JoinColumn(name = "PARENT_ITEM_ID", nullable = true)<br />
    protected PasteItem parent;</p>
<p>    @OneToMany(fetch = FetchType.LAZY, mappedBy = "parent")<br />
    protected List<PasteItem> children;<br />
    ...<br />
}<&#47;pre><br />
We are using annotations to define our entity model. The interesting part here is that we didn't use any <a href="http:&#47;&#47;www.hibernate.org&#47;397.html" target="_blank">Hibernate-specific annotations<&#47;a>, and instead relied on the standard ones from the <a href="http:&#47;&#47;java.sun.com&#47;developer&#47;technicalArticles&#47;J2EE&#47;jpa&#47;" target="_blank">JPA API<&#47;a>. Hibernate understands these annotations so it seems logical to use them because then we can make the application more portable, as we could replace Hibernate for any JPA-enabled library. Also, another great feature of JPA is that we can define a set of named queries that our Dao implementations can use. This allows you to define almost anything that's related to the persistence layer under one class, like the entity, its properties and the different ways to access the entity via queries under one place, which then becomes your main reference class.</p>
<h1>Service layer<&#47;h1><br />
We defined a primary service interface that the Wicket front-end will use to interact between the web pages and the rest of the application. The service layer classes are usually responsible for implementing the required business rules of the application, and they can be as complex or as simple as required, depending on what the actual requirements of the application are. Wikipedia defines a <a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Business_rule" target="_blank">business rule<&#47;a> as:</p>
<blockquote><p><strong>Business rule<&#47;strong> is a statement that defines or constrains some aspect of the business. It is intended to assert business structure or to control or influence the behavior of the business. Individual business rules that describe the same facet of an enterprise are usually arranged into&Acirc;&nbsp;<strong>business rulesets<&#47;strong>. Business rules describe the operations, definitions and constraints that apply to an organization in achieving its goals.<&#47;blockquote><br />
In layman's terms, a business rule is anything that affects the way we act on our data. This is how our service implementation looks like:</p>
<pre lang="java">import com.mysticcoders.mysticpaste.model.LanguageType;<br />
import com.mysticcoders.mysticpaste.model.PasteItem;<br />
import com.mysticcoders.mysticpaste.persistence.PasteItemDao;<br />
import com.mysticcoders.mysticpaste.utils.TokenGenerator;<br />
import org.slf4j.Logger;<br />
import org.slf4j.LoggerFactory;<br />
import org.springframework.transaction.annotation.Transactional;</p>
<p>import java.util.ArrayList;<br />
import java.util.Date;<br />
import java.util.List;</p>
<p>public class PasteServiceImpl implements PasteService {<br />
    private final Logger logger = LoggerFactory.getLogger(getClass());</p>
<p>    public static final int DEFAULT_TOKEN_LENGTH = 10;</p>
<p>    private PasteItemDao itemDao;</p>
<p>    private int tokenLength;</p>
<p>    public PasteServiceImpl() {<br />
        this.tokenLength = DEFAULT_TOKEN_LENGTH;<br />
    }</p>
<p>    public PasteServiceImpl(PasteItemDao itemDao, int tokenLength) {<br />
        this.itemDao = itemDao;<br />
        this.tokenLength = tokenLength;<br />
    }</p>
<p>    @Transactional(readOnly = true)<br />
    public List<PasteItem> getLatestItems(String clientToken, int count, int startIndex, boolean threaded)<br />
            throws InvalidClientException {<br />
        logger.trace("Service: getLatestItems. clientToken = {}, count = {}, startIndex = {}, threaded = {}",<br />
                new Object[]{clientToken, count, startIndex, threaded});<br />
        List<PasteItem> results = null;<br />
        if (threaded) {<br />
            results = itemDao.findThreaded(count, startIndex);<br />
        } else {<br />
            results = itemDao.find(count, startIndex);<br />
        }</p>
<p>        if (null == results) {<br />
            logger.warn("Found no items in database.");<br />
            results = new ArrayList<PasteItem>();<br />
        }<br />
        return results;<br />
    }</p>
<p>    @Transactional(readOnly = true)<br />
    public PasteItem getItem(String clientToken, long id) throws InvalidClientException {<br />
        return itemDao.get(id);<br />
    }</p>
<p>    @Transactional(readOnly = true)<br />
    public PasteItem findPrivateItem(String clientToken, String privateToken) throws InvalidClientException {<br />
        return itemDao.findByToken(privateToken);<br />
    }</p>
<p>    @Transactional(readOnly = true)<br />
    public List<PasteItem> findItemsByLanguage(String clientToken, LanguageType languageType, int count,<br />
                                               int startIndex, boolean threaded)<br />
            throws InvalidClientException {</p>
<p>        List<PasteItem> results = null;<br />
        if (threaded) {<br />
            results = itemDao.findByLanguageThreaded(languageType, count, startIndex);<br />
        } else {<br />
            results = itemDao.findByLanguage(languageType, count, startIndex);<br />
        }<br />
        if (null == results) {<br />
            results = new ArrayList<PasteItem>();<br />
        }<br />
        return results;<br />
    }</p>
<p>    @Transactional(rollbackFor = Exception.class)<br />
    public long createItem(String clientToken, PasteItem item) throws InvalidClientException {<br />
        if (null != item &amp;&amp; item.isPrivate()) {<br />
            item.setPrivateToken(TokenGenerator.generateToken(getTokenLength()));<br />
        }<br />
        &#47;&#47; set created Timestamp<br />
        item.setTimestamp(new Date(System.currentTimeMillis()));<br />
        return itemDao.create(item);<br />
    }</p>
<p>    public long getLatestItemsCount(String clientToken) throws InvalidClientException {<br />
        return itemDao.getPasteCount();<br />
    }</p>
<p>    public PasteItemDao getItemDao() {<br />
        return itemDao;<br />
    }</p>
<p>    public void setItemDao(PasteItemDao itemDao) {<br />
        this.itemDao = itemDao;<br />
    }</p>
<p>    public int getTokenLength() {<br />
        return tokenLength;<br />
    }</p>
<p>    public void setTokenLength(int tokenLength) {<br />
        this.tokenLength = tokenLength;<br />
    }<br />
}<&#47;pre><br />
The business rules for the pastebin are very light in nature. One of the business rule we have from the requirements is to generate a random string token to use as the private paste identifier, so that instead of having a sequential id (which can be guessed), it is identified by this string and a special url.</p>
<p>We're using <a href="http:&#47;&#47;www.slf4j.org&#47;" target="_blank">slf4j<&#47;a> as our logging mechanism. This allows us to statically map our logging to one of log4j, jdk, etc., and it also allows us to have very simple logging messages that will help us 'debug' the application in a sense. Nowadays it is considered bad practice to use <em>System.out.println()<&#47;em> messages as we don't have control over them (i.e. they will always appear). Having a logging mechanism with separate message levels allows us to control what we want to show.</p>
<p>It is also interesting to note that in order to support a transactional set of methods, we used Spring's <a href="http:&#47;&#47;static.springsource.org&#47;spring&#47;docs&#47;2.5.1&#47;api&#47;org&#47;springframework&#47;transaction&#47;annotation&#47;Transactional.html" target="_blank">@Transactional<&#47;a> annotation. This annotation allows us to mark a method (and its underlying method calls) as part of one transaction, and optionally to mark said transaction as read-only. Also, take care that marking a method as transactional is often not enough, as we have to specify under which conditions the transaction needs to rollback (in our case, every time an exception is thrown). This is because by default, spring only rolls back transactions when <strong>runtime<&#47;strong> exceptions are thrown.</p>
<h1>Persistence layer<&#47;h1><br />
Since we are using Hibernate, our persistence layer becomes a really easy, thin layer. Here's our Dao implementation:</p>
<pre lang="java">import com.mysticcoders.mysticpaste.model.LanguageType;<br />
import com.mysticcoders.mysticpaste.model.PasteItem;<br />
import com.mysticcoders.mysticpaste.persistence.PasteItemDao;</p>
<p>import java.util.List;</p>
<p>public class PasteItemDaoImpl extends AbstractDaoHibernate<PasteItem> implements PasteItemDao {</p>
<p>    protected PasteItemDaoImpl() {<br />
        super(PasteItem.class);<br />
    }</p>
<p>    public Long create(PasteItem item) {<br />
        save(item);<br />
        return item.getId();<br />
    }</p>
<p>    public PasteItem get(long id) {<br />
        PasteItem item = (PasteItem) getSession().getNamedQuery("item.getById")<br />
                .setLong("id", id).setMaxResults(1)<br />
                .uniqueResult();<br />
        return item;<br />
    }</p>
<p>    public List<PasteItem> findByLanguage(LanguageType languageType, int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findByLanguage")<br />
                .setParameter("type", languageType)<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }</p>
<p>    public List<PasteItem> findByLanguageThreaded(LanguageType languageType, int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findByLanguageThreaded")<br />
                .setParameter("type", languageType)<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }</p>
<p>    public List<PasteItem> find(int count, int startIndex) {<br />
        return getSession().getNamedQuery("item.find")<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }</p>
<p>    public List<PasteItem> findThreaded(int count, int startIndex) {<br />
        return getSession()<br />
                .getNamedQuery("item.findThreaded")<br />
                .setMaxResults(count).setFirstResult(startIndex).list();<br />
    }</p>
<p>    public PasteItem findByToken(String privateToken) {<br />
        return (PasteItem) getSession()<br />
                .getNamedQuery("item.findByToken")<br />
                .setParameter("token", privateToken)<br />
                .uniqueResult();<br />
    }</p>
<p>    public long getPasteCount() {<br />
        Long count = (Long) getSession()<br />
                .getNamedQuery("item.count")<br />
                .setMaxResults(1).uniqueResult();<br />
        return null == count ? 0 : count;<br />
    }<br />
}<&#47;pre><br />
We have taken advantage of JPA's <a href="http:&#47;&#47;java.sun.com&#47;javaee&#47;5&#47;docs&#47;api&#47;javax&#47;persistence&#47;NamedQuery.html" target="_blank">@NamedQuery<&#47;a> annotation to greatly simplify the code in our Dao implementation. Since all the queries for accessing a PasteItem were already defined inside the entity (in our case, the PasteItem class), we only need to refer to those queries here, set the named parameters and get the results.</p>
<p>We also defined an abstract class to "generify" (term borrowed from IDEA's inspection) Hibernate's access:</p>
<pre lang="java">import org.hibernate.Session;<br />
import org.hibernate.SessionFactory;<br />
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;</p>
<p>import java.io.Serializable;</p>
<p>public class AbstractDaoHibernate<T> extends HibernateDaoSupport {<br />
    private Class entityClass;</p>
<p>    private SessionFactory sessionFactory;</p>
<p>    protected AbstractDaoHibernate(Class dataClass) {<br />
        super();<br />
        this.entityClass = dataClass;<br />
    }</p>
<p>    @SuppressWarnings("unchecked")<br />
    private T load(Long id) {<br />
        return (T) getSession().get(entityClass, id);<br />
    }</p>
<p>    @SuppressWarnings("unchecked")<br />
    private T loadChecked(Long id) throws EntityNotFoundException {<br />
        T persistedObject = load(id);</p>
<p>        if (persistedObject == null) {<br />
            throw new EntityNotFoundException(entityClass, id);<br />
        }<br />
        return persistedObject;<br />
    }</p>
<p>    public void merge(T detachedObject) {<br />
        getSession().merge(detachedObject);<br />
    }</p>
<p>    public void save(T persistedObject) {<br />
        getSession().saveOrUpdate(persistedObject);<br />
    }</p>
<p>    private void delete(T persistedObject) {<br />
        getSession().delete(persistedObject);<br />
    }</p>
<p>    public void delete(Long id) {<br />
        delete(loadChecked(id));<br />
    }<br />
}<&#47;pre><br />
This class takes advantage of Java 5 generics in order to implement the common persistence methods that we have. It also extends Spring's <a href="http:&#47;&#47;static.springsource.org&#47;spring&#47;docs&#47;2.5.x&#47;api&#47;org&#47;springframework&#47;orm&#47;hibernate3&#47;support&#47;HibernateDaoSupport.html" target="_blank">HibernateDaoSupport<&#47;a> to make it easier to integrate with Spring.</p>
<h1>Wiring everything together<&#47;h1><br />
Once we have the service and the persistence layer, we need a way to put everything together in order for our application to work. Since we are using Spring, we only need to define our beans in the applicationContext.xml:</p>
<pre lang="xml">
<?xml version="1.0" encoding="UTF-8"?><br />
<beans xmlns="http:&#47;&#47;www.springframework.org&#47;schema&#47;beans"<br />
       xmlns:xsi="http:&#47;&#47;www.w3.org&#47;2001&#47;XMLSchema-instance"<br />
       xmlns:tx="http:&#47;&#47;www.springframework.org&#47;schema&#47;tx"<br />
       xsi:schemaLocation="http:&#47;&#47;www.springframework.org&#47;schema&#47;beans http:&#47;&#47;www.springframework.org&#47;schema&#47;beans&#47;spring-beans-2.5.xsd http:&#47;&#47;www.springframework.org&#47;schema&#47;tx http:&#47;&#47;www.springframework.org&#47;schema&#47;tx&#47;spring-tx-2.5.xsd"></p>
<p>    <!-- Services Beans --><br />
    <bean id="pasteService" class="com.mysticcoders.mysticpaste.services.PasteServiceImpl"></p>
<property name="itemDao" ref="pasteItemDao"&#47;>
<property name="tokenLength" value="${private.token.length}" &#47;>
    <&#47;bean></p>
<p>    <!-- DAOs --><br />
    <bean id="pasteItemDao" class="com.mysticcoders.mysticpaste.persistence.hibernate.PasteItemDaoImpl"></p>
<property name="sessionFactory" ref="sessionFactory"&#47;>
    <&#47;bean></p>
<p>    <!-- Wicket Application --><br />
    <bean id="wicketApplication" class="com.mysticcoders.mysticpaste.MysticPasteApplication"&#47;></p>
<p>    <!--  Database Beans --><br />
    <bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close"></p>
<property name="driverClassName" value="${jdbc.driver}"&#47;>
<property name="url" value="${jdbc.url}"&#47;>
<property name="username" value="${jdbc.username}"&#47;>
<property name="password" value="${jdbc.password}"&#47;>
    <&#47;bean></p>
<p>    <!-- Hibernate session factory --><br />
    <bean id="sessionFactory"<br />
          class="org.springframework.orm.hibernate3.annotation.AnnotationSessionFactoryBean"></p>
<property name="dataSource" ref="dataSource"&#47;>
<property name="hibernateProperties">
<props>
<prop key="hibernate.dialect">${hibernate.dialect}<&#47;prop></p>
<prop key="hibernate.show_sql">${hibernate.show_sql}<&#47;prop></p>
<prop key="use_outer_join">${hibernate.use_outer_join}<&#47;prop></p>
<prop key="hibernate.cache.use_second_level_cache">${hibernate.cache.use_second_level_cache}<&#47;prop></p>
<prop key="hibernate.cache.use_query_cache">${hibernate.cache.use_query_cache}<&#47;prop></p>
<prop key="hibernate.cache.provider_class">${hibernate.cache.provider}<&#47;prop></p>
<prop key="hibernate.connection.pool_size">10<&#47;prop></p>
<prop key="hibernate.jdbc.batch_size">1000<&#47;prop></p>
<prop key="hibernate.bytecode.use_reflection_optimizer">true<&#47;prop></p>
<p>            <&#47;props><br />
        <&#47;property></p>
<property name="annotatedClasses">
<list>
                <value>com.mysticcoders.mysticpaste.model.PasteItem<&#47;value><br />
            <&#47;list><br />
        <&#47;property></p>
<property name="schemaUpdate" value="${hibernate.schemaUpdate}"&#47;>
    <&#47;bean></p>
<p>    <!-- Tell Spring it should use @Transactional annotations --><br />
    <tx:annotation-driven&#47;></p>
<p>    <bean id="transactionManager"<br />
          class="org.springframework.orm.hibernate3.HibernateTransactionManager"></p>
<property name="sessionFactory" ref="sessionFactory"&#47;>
    <&#47;bean><br />
<&#47;beans><&#47;pre><br />
The Service is configured as a bean, with a reference to the Dao implementation and to a variable that will be replaced by maven when building for the appropriate platform, as mentioned in <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket-day-1&#47;">day 1<&#47;a>. The Dao is configured with a reference to Hibernate's <em>sessionFactory<&#47;em> bean, and the rest is the configuration for Hibernate (the data source, the transaction manager, etc.).<br />
Since we're using annotations, we need to set the property <em>annotatedClasses<&#47;em> with a list of the Hibernate (or JPA) configured entity classes, in this case the PasteItem class. In order for the @Transactional annotation to work we need to tell Spring that our transaction is driven by those annotations with the <strong><tx:annotation-driven&#47;><&#47;strong> tag. I've been involved in previous projects where the other developers think they are doing transactions because they used the annotation, but forgot to add this piece to the configuration, thus resulting in database inconsistencies. </p>
<h1>Conclusion<&#47;h1><br />
Designing the backend involves very little Wicket (or nothing at all as we saw here), but it's very important to separate our different layers to make the application easier to maintain. Using Spring and Hibernate is win-win situation because we leave many configuration options to Spring, and we are able to provide an easy to use and easy to understand implementation of our service and persistence layer.</p>
<p><strong>EDIT:<&#47;strong> Added the wicketApplication bean to the Spring configuration file.</p>
