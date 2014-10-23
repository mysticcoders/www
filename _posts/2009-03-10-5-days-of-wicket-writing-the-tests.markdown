---
layout: post
status: publish
published: true
title: 5 Days of Wicket - Writing the tests
author:
  display_name: jedstrom
  login: jedstrom
  email: jedstrom@mysticcoders.com
  url: ''
author_login: jedstrom
author_email: jedstrom@mysticcoders.com
excerpt: "In the course of building an application, whether it due to shortened timelines,
  lack of process, or laziness, tests become an afterthought.  Tests often are added
  when problems are found, or to root out bugs that were not found during early phases.\r\n\r\nThis
  article, day 2 of our project, will show how to write a solid baseline for your
  application with tests as the strong foundation.  Our first meetings laid down the
  scope and direction we wanted achieved for this short project.  We had a clear sense
  of the problem we wanted to solve, as well as the basic components we were going
  to implement."
wordpress_id: 317
wordpress_url: http://www.mysticcoders.com/?p=317
date: '2009-03-10 09:00:33 +0000'
date_gmt: '2009-03-10 16:00:33 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 262
  author: mystic blog &raquo; 5 Days of Wicket - Designing the backend
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/11/5-days-of-wicket-day-designing-the-backend/
  date: '2009-03-11 09:00:45 +0000'
  date_gmt: '2009-03-11 16:00:45 +0000'
  content: "[...] mentioned in day 2 of our series, we have a main service interface
    that came from an initial discussion of what we [...]"
- id: 265
  author: mystic blog &raquo; 5 Days of Wicket!
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/
  date: '2009-03-11 10:06:07 +0000'
  date_gmt: '2009-03-11 17:06:07 +0000'
  content: "[...] Day 2 - Writing the Tests [...]"
- id: 580
  author: Dane
  author_email: danelaverty@gmail.com
  author_url: http://marshcousins.wordpress.com
  date: '2009-08-18 11:30:28 +0000'
  date_gmt: '2009-08-18 18:30:28 +0000'
  content: "I'm trying to run the tests by running \"mvn test\" from the mysticpaste
    root directory, but I get:\r\n\r\nTests run: 2, Failures: 0, Errors: 2, Skipped:
    0, Time elapsed: 0.031 sec <<< FAILURE!\r\ntestRenderMyPage(com.mysticcoders.webapp.TestPastePage)
    \ Time elapsed: 0 sec  <<< ERROR!\r\njava.lang.IllegalStateException: No WebApplicationContext
    found: no ContextLoaderListener registered?\r\n\tat org.springframework.web.context.support.WebApplicationContextUtils.getRequiredWebApplicationContext(WebApplicationContextUtils.java:70)\r\n\r\nAny
    suggestions?"
- id: 581
  author: jedstrom
  author_email: jedstrom@mysticcoders.com
  author_url: http://
  date: '2009-08-18 13:15:51 +0000'
  date_gmt: '2009-08-18 20:15:51 +0000'
  content: What version of Maven are you using? I just tried mvn clean test and passed
    all tests with 2.0.9.
- id: 582
  author: Dane
  author_email: danelaverty@gmail.com
  author_url: http://marshcousins.wordpress.com
  date: '2009-08-18 15:46:41 +0000'
  date_gmt: '2009-08-18 22:46:41 +0000'
  content: "Thanks for responding! I'm also using Maven 2.0.9. I just re-cloned the
    app again to try it from scratch (using \"hg clone https://kenai.com/hg/mystic-apps~mystic-apps\")
    and came up with the same errors on running \"mvn clean test\".\r\n\r\nThe reports
    show that all the errors are of type \"java.lang.IllegalStateException: No WebApplicationContext
    found: no ContextLoaderListener registered?\" However, the web.xml does contain
    \"  org.springframework.web.context.ContextLoaderListener  \". All I can guess
    is that the Maven build isn't picking that up, but I don't know enough about Maven
    to know where to start looking for that.\r\n\r\nThe Maven output is below. Thanks
    again for your help!\r\n\r\n  Results :\r\n  Tests in error:  testRenderMyPage(com.mysticcoders.webapp.TestHomePage)
    \ \r\ntestRenderMyPage(com.mysticcoders.webapp.TestPastePage)  \r\ntestHistoryMenuClick(com.mysticcoders.webapp.TestPastePage)\r\nTests
    run: 7, Failures: 0, Errors: 3, Skipped: 0"
- id: 584
  author: jedstrom
  author_email: jedstrom@mysticcoders.com
  author_url: http://
  date: '2009-08-19 11:25:58 +0000'
  date_gmt: '2009-08-19 18:25:58 +0000'
  content: Dane, updated the tests. It looks like the SpringInjector got funny after
    the 1.4 upgrade, thanks for noticing!
- id: 585
  author: Dane
  author_email: danelaverty@gmail.com
  author_url: http://marshcousins.wordpress.com
  date: '2009-08-19 13:13:50 +0000'
  date_gmt: '2009-08-19 20:13:50 +0000'
  content: Not a problem! Your application has been a godsend. For a developer like
    me who is trying to simultaneously learn Wicket, Hibernate, and Spring, the Mystic
    Paste application is just about perfect. The only addition I could wish for would
    be for it to include an authentication/authorization piece ;)
- id: 604
  author: 5 Days of Wicket - Putting it all together
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/13/5-days-of-wicket-putting-it-all-together/
  date: '2009-08-25 14:28:44 +0000'
  date_gmt: '2009-08-25 21:28:44 +0000'
  content: "[...] On Day 2, we ran through some basics on Mocks, and with a bit of
    upfront design on interfaces, a testing harness is available for building out
    the backend. &Acirc;&nbsp;We also learned how to take Unitils and extend our tests
    passed just a functional unit, and move through many layers of the built system,
    and ensure we go a bit beyond just code coverage. [...]"
- id: 3107
  author: Joseph Crawford
  author_email: info@josephcrawford.com
  author_url: http://josephcrawford.com/
  date: '2010-01-22 08:53:18 +0000'
  date_gmt: '2010-01-22 15:53:18 +0000'
  content: "I have been trying to get this to work however I cannot get the project
    to build properly.  I am getting the following errors.\r\n\r\n[code]\r\n[ERROR]BUILD
    FAILURE\r\n------------------------------------------------------------------------\r\nCompilation
    failure\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[8,12]
    cannot find symbol\r\nsymbol  : class PasteService\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[10,12]
    cannot find symbol\r\nsymbol  : class PasteItemDao\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[30,47]
    cannot find symbol\r\nsymbol  : class InvalidClientException\r\nlocation: class
    PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[12,5]
    incompatible types\r\nfound   : junit.framework.Test\r\nrequired: java.lang.annotation.Annotation\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[16,5]
    incompatible types\r\nfound   : junit.framework.Test\r\nrequired: java.lang.annotation.Annotation\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[29,5]
    incompatible types\r\nfound   : junit.framework.Test\r\nrequired: java.lang.annotation.Annotation\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[18,8]
    cannot find symbol\r\nsymbol  : class PasteItem\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[18,30]
    cannot find symbol\r\nsymbol  : class PasteItem\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[24,12]
    cannot find symbol\r\nsymbol  : method assertTrue(boolean)\r\nlocation: class
    PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[25,17]
    cannot find symbol\r\nsymbol  : class InvalidClientException\r\nlocation: class
    PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[31,8]
    cannot find symbol\r\nsymbol  : class PasteItem\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[31,30]
    cannot find symbol\r\nsymbol  : class PasteItem\r\nlocation: class PasteServiceIntegrationTest\r\n\r\ncom/mysticcoders/PasteServiceIntegrationTest.java:[37,8]
    cannot find symbol\r\nsymbol  : class PasteItem\r\nlocation: class PasteServiceIntegrationTest\r\n[/code]\r\n\r\nI
    know that the class PasteItem is missing because until this point your tutorial
    has not stated to create the file or what the contents should be. However I am
    getting an incompatible type error when you use @Test in the code."
- id: 3172
  author: Tom
  author_email: tom@10minutemail.com
  author_url: ''
  date: '2010-05-04 09:07:33 +0000'
  date_gmt: '2010-05-04 16:07:33 +0000'
  content: "Hi there.\r\n\r\nI've been following the series and checked out the code
    for mysticpaste via your repository. I've setup my own project with a simple shoutbox,
    but I haven't been able to run tests by following this tutorial and by looking
    at your test modules in the repository.\r\n\r\nI have made sure that the unitils
    property file is the same as yours and that it is loaded by the mvn test goal.
    When starting up, however, one of the lines from the console output says: INFO
    - Dialect: using org.hibernate.dialect.PostgreSQLDialect even though my unitils.properties
    has the database.dialect=hsqldb line set.\r\n\r\nCould you have a look at let
    me know if you've seen this before?\r\n\r\nWhen I run mvn test the tests fail,
    and it all boils down to this exception:\r\n\r\nCaused by: java.sql.SQLException:
    Table not found in statement [select relname from pg_class]\r\n\tat org.hsqldb.jdbc.Util.sqlException(Unknown
    Source)\r\n\tat org.hsqldb.jdbc.jdbcStatement.fetchResult(Unknown Source)\r\n\tat
    org.hsqldb.jdbc.jdbcStatement.executeQuery(Unknown Source)\r\n\tat org.apache.commons.dbcp.DelegatingStatement.executeQuery(DelegatingStatement.java:188)\r\n\tat
    org.hibernate.tool.hbm2ddl.DatabaseMetadata.initSequences(DatabaseMetadata.java:151)\r\n\tat
    org.hibernate.tool.hbm2ddl.DatabaseMetadata.(DatabaseMetadata.java:69)\r\n\tat
    org.hibernate.tool.hbm2ddl.DatabaseMetadata.(DatabaseMetadata.java:62)\r\n\tat
    org.springframework.orm.hibernate3.LocalSessionFactoryBean$3.doInHibernate(LocalSessionFactoryBean.java:958)\r\n\tat
    org.springframework.orm.hibernate3.HibernateTemplate.doExecute(HibernateTemplate.java:419)\r\n\t...
    49 more"
- id: 3225
  author: Maxat Yermukhanov
  author_email: maksat.ermuhanov@gmail.com
  author_url: ''
  date: '2010-09-16 09:08:34 +0000'
  date_gmt: '2010-09-16 16:08:34 +0000'
  content: "Hi, I think you need to add \r\ncreate\r\nin applicationContext.xml /
    hibernateProperties."
- id: 3226
  author: Maxat Yermukhanov
  author_email: maksat.ermuhanov@gmail.com
  author_url: ''
  date: '2010-09-16 09:10:15 +0000'
  date_gmt: '2010-09-16 16:10:15 +0000'
  content: "Sorry, just set hibernate.hbm2ddl.auto - create\r\nin applicationContext.xml
    / hibernateProperties."
---
In the course of building an application, whether it due to shortened timelines, lack of process, or laziness, tests become an afterthought.  Tests often are added when problems are found, or to root out bugs that were not found during early phases.

This article, day 2 of our project, will show how to write a solid baseline for your application with tests as the strong foundation.  Our first meetings laid down the scope and direction we wanted achieved for this short project.  We had a clear sense of the problem we wanted to solve, as well as the basic components we were going to implement.<br />
<a id="more"></a><a id="more-317"></a>

In testing code there are several cycles commonly used in the enterprise community.  We will start our testing tutorial by talking about <a href="http://en.wikipedia.org/wiki/Mock_object" target="_blank">mocks</a>.

<strong>Mocks</strong><br />
The Wikipedia page on Mock object describes them simply:

<blockquote>In object-oriented programming, mock objects are simulated objects that mimic the behavior of real objects in controlled ways</blockquote><br />
In Java, utilizing Mock objects generally requires the usage of interfaces.  The interfaces are hopefully something that evolved from initial design discussions, and become the basis for the expected functions and behavior.

The tool we use to build the Mocks is <a href="http://www.easymock.org/" target="_blank">EasyMock</a> and <a href="http://www.junit.org/" target="_blank">JUnit</a> for unit tests.  In your search for the ultimate testing tool, I'd strongly encourage you to try out other tools such as <a href="http://testng.org/" target="_blank">TestNG</a> and <a href="http://jmock.org" target="_blank">JMock</a>.

The longest running unit-testing tool in the Java world is definitely JUnit.  If you'd like to read up on Test Driven Development and each of the concepts outlined here in more detail, <a href="http://www.amazon.com/Test-Driven-Development-Addison-Wesley-Signature/dp/0321146530/ref=pd_bbs_sr_1?ie=UTF8&amp;s=books&amp;qid=1236382900&amp;sr=8-1">Test Driven Development by Example</a> is a brilliant book written by Kent Beck on the topic.  Test Driven Development stands alone in the Agile theory as the most effective value preached, especially when done early, and done comprehensively.

We have a few interfaces now, which came of initial discussion about how we imagine a pastebin functioning, so what is the next step?  And how can testing help us?

Here is the primary service interface:

<pre lang="java">public interface PasteService {<br />
	List getLatestItems(String clientToken, int count, boolean threaded) throws InvalidClientException;

	PasteItem getItem(String clientToken, long id) throws InvalidClientException;

	PasteItem findPrivateItem(String clientToken, String privateToken) throws InvalidClientException;

	List findItemsByLanguage(String clientToken, LanguageType languageType, int count, boolean threaded) throws InvalidClientException;

	long createItem(String clientToken, PasteItem item) throws InvalidClientException;

	long createReplyItem(String clientToken, PasteItem item, long parentId) throws InvalidClientException, ParentNotFoundException;

	List getItemsForUser(String clientToken, String userToken) throws InvalidClientException;

	PasteStats getStats(String clientToken) throws InvalidClientException;<br />
}</pre><br />
This is the first step in the design, we now have something describing the desired functionality, so we will start by mocking these interfaces.

EasyMock is a handy tool for this, so we simply add the necessary bits and pieces to our pom file and reload the project to get the correct dependencies:

<pre><dependency><br />
 <groupId>org.easymock</groupId><br />
 <artifactId>easymock</artifactId><br />
 <version>2.4</version><br />
 </dependency></pre>

<pre><dependency><br />
 <groupId>org.easymock</groupId><br />
 <artifactId>easymockclassextension</artifactId><br />
 <version>2.4</version><br />
 </dependency></pre><br />
We've also made some changes to the initial POM that we created to pull in JUnit version 4.5.  Newer versions of JUnit are backwards compatible and add enhancements to your testing such as annotations.

For our first mocks, we start off with extending JUnit's default <em>TestCase</em>.  We add in some convenience methods to help us return a mock Dao and a mock Service.

<pre lang="java">	private PasteItemDao dao;<br />
	private PasteService svc;

	@Test<br />
	public void testMocks() {<br />
		dao = getPasteItemDao();<br />
	 	assertNotNull(getPasteItemDao());<br />
	 	svc = getPasteService();<br />
	 	assertNotNull(getPasteService());<br />
	}

	@Test<br />
	public void testGetLatestItems() throws Exception {<br />
		svc = getPasteService();<br />
		assertNotNull(getPasteService());<br />
		expect(svc.getLatestItems("CLIENT", 10, false)).andReturn(getPastes(10, LanguageType.PASCAL, false));<br />
		replay(svc);<br />
		List returnedList = svc.getLatestItems("CLIENT", 10, false);<br />
		verify(svc);<br />
		assertEquals(10, returnedList.size());<br />
	}</pre><br />
What we are doing here is essentially describing the calls we expect, we replay and call the mocked service and finally we verify and assert that the results are as expected.

While this may seem quite obvious, this will help us in comparing what an implementation will have to return, that the code has coverage and the mocks of these classes actually behave as expected. Once we have full mock coverage we can start implementing the code, and keep looping back to our tests to verify that things work as expected.

<strong>Integration and Implementation Tests</strong><br />
Once we have a working implementation, covered by our mock tests for expected behavior, the next step to consider are <a href="http://en.wikipedia.org/wiki/Integration_testing" target="_blank">integration tests</a>.  Integration tests involve a more complete test involving third party components such as a database or complex services.  The focus here is to track down potential errors in our project e.g.  configuration files, Dao mapping and entity problems, etc.  The tool we consider well thought out and best of breed would help us setup a complete testbed, to include an in-memory database.

<a href="http://unitils.org" target="_blank">Unitils</a> brings together several common tools used separately into a cohesive integration testing framework.  It provides the ability to run a Spring context and an in-memory database which we can use to perform full life-cycle tests on all components.  These tools let us write tests that will verify our applications behaviour in a real life situation.  The value here can be seen later in the project, as it will continue to be referenced throughout the lifecycle of our project.  We can use them to hunt down possible bugs, add features without worry of breaking other pieces of our application, or simply maintaining and refactoring the codebase.  Yet another benefit is hidden, for it helps new developers on the project understand how everything ties together without the need for a separate, distant, and possibly rarely updated document.

We hunt down our applications Spring configuration file "applicationContext.xml" and make a copy of it and place it in "src/test/resources".  In addition we add a secondary configuration file "applicationContext-test.xml" that overrides the default datasource and supplies a Unitils datasource.

applicationContext-test.xml

<pre lang="xml" line="n">
<?xml version="1.0" encoding="UTF-8"?><br />
<beans xmlns="http://www.springframework.org/schema/beans"<br />
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<br />
       xmlns:tx="http://www.springframework.org/schema/tx"<br />
       xsi:schemaLocation="<br />
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd<br />
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">

   <bean id="dataSource" class="org.unitils.database.UnitilsDataSourceFactoryBean"/>

</beans><br />
</pre><br />
We then add a file "unitils.properties" where we define how unitils is supposed to behave.

<pre># Properties for the PropertiesDataSourceFactory<br />
database.driverClassName=org.hsqldb.jdbcDriver

database.url=jdbc:hsqldb:mem:mysticpaste-test<br />
database.userName=sa<br />
database.password=

# This property specifies the underlying DBMS implementation. Supported values are 'oracle', 'db2', 'mysql', 'hsqldb' and 'postgresql'.<br />
# The value of this property defines which vendor specific implementations of DbSupport and ConstraintsDisabler are chosen.<br />
database.dialect=hsqldb

## This property specifies the database schema that is used. This schema name is used to qualify all tables when (amongst<br />
# others) clearing / dropping tables / inserting test data.<br />
# NOTE: schema name is case sensitive<br />
database.schemaName=mysticpaste<br />
dbMaintainer.generateDTD.enabled=TRUE<br />
# DbUnit database DTD file path<br />
dtdGenerator.dtd.filename=src/resources/test.dtd</pre><br />
This file will now allow us to move on to an implementation we start with an AbstractBaseTest where we extend a Unitils class called UnitilsJUnit4.

<pre lang="java">public class AbstractIntegrationTest extends UnitilsJUnit4 {

&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; @SpringApplicationContext({"applicationContext.xml", "applicationContext-test.xml"})<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; private ApplicationContext applicationContext;

&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; /**<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; * Method testDoNothing ...<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; */<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; //This is to keep maven surefire quiet.<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; @Test<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; public void testDoNothing() {<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; //Nothing<br />
&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp;&Acirc;&nbsp; }

}</pre><br />
If you run the test, you will see in the logging output a complete invocation of the spring context, database setup and verification of mapped entities, pretty nifty for an empty test!

We can now move on to testing the actual implementations provided with a full cycle environment.

As we are using Unitils and its Spring utilities we also have handy annotations for injecting our real daos and their implementations into our tests.

Our final test-class that will completely test our environment looks as follows:

<pre lang="java">public class PasteServiceIntegrationTest extends AbstractIntegrationTest {<br />
    @SpringBeanByType<br />
    private PasteService svc;<br />
    @SpringBeanByType<br />
    private PasteItemDao dao;<br />
    // We start with verifying that the DB is correctly setup.<br />
    @Test<br />
    public void testMapping() {<br />
        HibernateUnitils.assertMappingWithDatabaseConsistent();<br />
    }<br />
    @Test<br />
    public void testGetCurrentCount() {<br />
        PasteItem paste = new PasteItem();<br />
        paste.setContent("TEST-DATA");<br />
        paste.setUserToken("USER");<br />
        paste.setClientToken("CLIENT");<br />
        try {<br />
            svc.createItem("CLIENT", paste);<br />
            assertTrue(svc.getItemsForUser("CLIENT", "USER").size() == 1);<br />
        } catch (InvalidClientException e) {<br />
            e.printStackTrace();  //TODO<br />
        }<br />
    }<br />
    @Test<br />
    public void testCreateAndRetrieve() throws InvalidClientException {<br />
        PasteItem paste = new PasteItem();<br />
        paste.setContent("TEST-DATA");<br />
        paste.setUserToken("USER");<br />
        paste.setClientToken("CLIENT");<br />
        Long id = svc.createItem("CLIENT", paste);<br />
        System.out.println(id);<br />
        PasteItem item2 = svc.getItem("CLIENT", id);<br />
        assertEquals(item2.getClientToken(), paste.getClientToken());<br />
    }<br />
}</pre><br />
Voila! We have a complete life cycle test.&Acirc;&nbsp; These tests of course run somewhat slower than mocks. As tools and aids to rapid development they are quite valuable and will help find elusive bugs and problematic issues.

