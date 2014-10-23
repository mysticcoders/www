---
layout: post
status: publish
published: true
title: Step-by-Step Syncing Google Calendar, iCal and the iPhone
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: "<p>I spent some time yesterday working with the new <a href=\"http:&#47;&#47;caldav.calconnect.org&#47;\"
  title=\"CalDAV\" target=\"_blank\">CalDAV<&#47;a> support in <a href=\"http:&#47;&#47;calendar.google.com&#47;\"
  title=\"Google Calendar\" target=\"_blank\">Google Calendar<&#47;a>. If you've been
  under a rock, they announced support for it very recently, and for users of the
  <a href=\"http:&#47;&#47;www.apple.com&#47;iphone&#47;\" title=\"Apple iPhone\"
  target=\"_blank\">iPhone<&#47;a>, and users of iCal, it means seamless syncing of
  their Google Calendar's with all 3 systems. What I found lacking, was a step-by-step
  tutorial on setting everything up, and the pitfalls and hidden steps along the way.
  First, a few assumptions to go over:<&#47;p>\r\n<ol>\r\n  <li>You've got a Gmail
  account or have a domain with Google Apps<&#47;li>\r\n\r\n  <li>You've got a Mac
  with iCal <em>(only required if you want the iCal sync with Google Calendar)<&#47;em><&#47;li>\r\n\r\n
  \ <li>You've got an iPhone <em>(only required if you want to sync your iPhone with
  Google Calendar)<&#47;em><&#47;li>\r\n<&#47;ol>\r\n"
wordpress_id: 342
wordpress_url: http://www.mysticcoders.com/blog/2009/03/08/step-by-step-syncing-google-calendar-ical-and-the-iphone/
date: '2009-03-08 13:30:23 +0000'
date_gmt: '2009-03-08 21:30:23 +0000'
categories:
- Apple Mac
tags:
- Apple Mac
comments: []
---
<p>I spent some time yesterday working with the new <a href="http:&#47;&#47;caldav.calconnect.org&#47;" title="CalDAV" target="_blank">CalDAV<&#47;a> support in <a href="http:&#47;&#47;calendar.google.com&#47;" title="Google Calendar" target="_blank">Google Calendar<&#47;a>. If you've been under a rock, they announced support for it very recently, and for users of the <a href="http:&#47;&#47;www.apple.com&#47;iphone&#47;" title="Apple iPhone" target="_blank">iPhone<&#47;a>, and users of iCal, it means seamless syncing of their Google Calendar's with all 3 systems. What I found lacking, was a step-by-step tutorial on setting everything up, and the pitfalls and hidden steps along the way. First, a few assumptions to go over:<&#47;p></p>
<ol>
<li>You've got a Gmail account or have a domain with Google Apps<&#47;li>
<li>You've got a Mac with iCal <em>(only required if you want the iCal sync with Google Calendar)<&#47;em><&#47;li>
<li>You've got an iPhone <em>(only required if you want to sync your iPhone with Google Calendar)<&#47;em><&#47;li><br />
<&#47;ol><br />
<a id="more"></a><a id="more-342"></a></p>
<h1>Step 1 - Setup Google Calendar<&#47;h1>Google has created a great system for managing calendars and sharing them with others across a domain, or individually with their Gmail account. The initial setup will involve having the default calendar setup with your account. If you have multiple calendars, continue to set those up as you normally would and we'll show you how to get those sync'd with iCal and iPhone.<br &#47;><br />
<br &#47;><br />
Google Apps users will need to ensure that the administrator for their domain logs into the management website, clicks Service Settings and Mobile in the menu. On that page click the checkbox for "Enable Google Sync" and hit "Save Changes".<br &#47;></p>
<div style="text-align: left;">
  <img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-3.png" width="480" height="188" alt="Picture 3.png" &#47;><br &#47;><br />
<&#47;div></p>
<h1>Step 2 - Setup iCal<&#47;h1>In setting up iCal, we can do this the easy way, or the hard way. As long as their is no difference in the effectiveness of the end result, I choose easy. To that end, we have <a href="http:&#47;&#47;code.google.com&#47;p&#47;calaboration&#47;" title="Calaboration" target="_blank">Calaboration<&#47;a>, a Google Sync setup tool specifically for setting up the CalDAV links in iCal.<br &#47;><br />
<br &#47;><br />
1. <a href="http:&#47;&#47;code.google.com&#47;p&#47;calaboration&#47;downloads&#47;list" title="Download Calaboration" target="_blank">Download Calaboration<&#47;a> 2. Copy the .app file to the Applications&#47; folder on your Mac<br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-11.png" width="152" height="137" alt="Picture 1.png" &#47;><br &#47;><br />
<br &#47;><br />
3. Run the Calaboration.app<br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-4.png" width="466" height="183" alt="Picture 4.png" &#47;><br &#47;><br />
<br &#47;><br />
4. Sign in with your Gmail or Google Apps login. Full email address with the password.<br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-7.png" width="480" height="223" alt="Picture 7.png" &#47;><br &#47;><br />
5. If iCal is already running, the application will prompt you to quit iCal and return to the application for setting up your calendars.<br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-5.png" width="460" height="480" alt="Picture 5.png" &#47;><br &#47;><br />
6. Select from the listed calendars what you would like to sync7. Click Add to iCal<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-6.png" width="480" height="224" alt="Picture 6.png" &#47;><br &#47;><br />
<em>NOTE: If you see your calendars greyed out, they've already been added, if they are greyed out with a lock to the right, they are read-only. If you want to add them to iCal, visit the applications preferences and select the "Enable read-only calendars" option. Make sure to read the message that goes along with this option, as it could affect your use of iCal.<&#47;em><br &#47;><br />
<br &#47;><br />
8. Okay, all done with that? Awesome. You're done with the iCal setup.<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-8.png" width="480" height="223" alt="Picture 8.png" &#47;><br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;picture-9.png" width="179" height="179" alt="Picture 9.png" &#47;><br &#47;><br />
<br &#47;><br />
9. Open iCal and ensure that each of the calendars selected from Calaboration show up. You'll notice that instead of the sane method, of having all calendars show under the same CalDAV server, the current implementation has one for each.<br &#47;><br />
<br &#47;><br />
10. iCal is now set-up and syncing with Google. Try it. Go wild. Add stuff and see it magically popup in iCal. Remove stuff, refresh Google Cal and see it disappear. Magic.<br &#47;><br />
<br &#47;><br />
<span style="font-size: 24px; font-weight: bold;">Step 3 - Setup iPhone<&#47;span><br &#47;></p>
<p><strong>IMPORTANT: If there is anything on your iPhone that isn't sync'd with your computer, plug in your iPhone and sync now. The process of setting up the iPhone deletes all calendars in order to proceed.<&#47;strong><br &#47;><&#47;p></p>
<p>The next step is covered very well in Google Support and should be followed completely: <a href="http:&#47;&#47;www.google.com&#47;support&#47;mobile&#47;bin&#47;answer.py?answer=138740" title="Sync: Set Up Your iPhone or iPod Touch" target="_blank">Sync: Set Up Your iPhone or iPod Touch<&#47;a><&#47;p></p>
<p>If you are using Gmail, you are done. If you are using Google Apps, and you have multiple calendars to sync, follow along for the conclusion.<&#47;p></p>
<p><strong>Getting Started<&#47;strong><&#47;p></p>
<p>1. Visit http:&#47;&#47;m.google.com&#47;sync<&#47;p></p>
<p>2. You'll see a webpage with icons for the various Google services, scroll down till you see:<&#47;p></p>
<p><br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;img-0005.png" width="192" height="288" alt="IMG_0005.PNG" &#47;> <img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;img-0006.png" width="192" height="288" alt="IMG_0006.PNG" &#47;><&#47;p></p>
<p>3. Tap the rounded button below the icons to configure sync for your domain<&#47;p></p>
<p>4. In the popup, enter the domain name for your Google App account, and press the Go button to the right of the text field. Do not use the iPhone Go button at the bottom right, as it only refreshes the page. Details on why this doesn't work would be boring.<&#47;p></p>
<p><br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;img-0002.png" width="192" height="288" alt="IMG_0002.PNG" &#47;>&nbsp;&nbsp;<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;img-0003.png" width="192" height="288" alt="IMG_0003.PNG" &#47;>&nbsp;&nbsp;<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;img-0004.png" width="192" height="288" alt="IMG_0004.PNG" &#47;><&#47;p></p>
<p>5. You will see an interface like the one in the first picture, select "iPhone".<&#47;p></p>
<p>6. Here you'll see a list of possible calendars to sync with the iPhone calendar. You'll see that the default calendar is already selected, simply select the calendars you want, and click "Save".<&#47;p></p>
<p>7. After hitting "Save" you will see a confirmation page which notifies of success.<&#47;p></p>
<p>8. That's it. Hit the "Home" button on your iPhone and select the Calendar. Within a few moments your Calendar items should stream into multiple calendars on the device.<&#47;p></p>
<p>I hope this quick tutorial was informative. The steps are fairly simple, but I was unable to find a tutorial that brought each of the pieces and caveats of each step together. Happy syncing!<&#47;p></p>
