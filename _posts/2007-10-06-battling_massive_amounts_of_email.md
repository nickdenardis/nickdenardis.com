---
title: "Battling massive amounts of email"
date: "2007-10-06"
---

![](/images/email_graph.gif)

Sending email from a web site using PHP’s [mail() function](http://php.net/mail/) is a pretty routine task. Contact forms, friend requests, alerts, errors… Servers hosting one or two sites the time to send an email is not even noticeable, but on a server that hosts 200+ sites the time creeps up the two to three second range.

In a shared server environment like [we have](http://wcs.wayne.edu/) at [Wayne State University](http://wayne.edu/), we have found there is no easy way to keep track of the emails being sent through php’s mail() function. It would take an analysis of the mail server logs or a friendly sysadmin of another server to alert you if there is a bot taking advantage of a mail() script on your site.

To combat this we are developing an extension for [PHPSimpl’s Mail class](http://code.google.com/p/phpsimpl/wiki/Mail) to instead of send out an email directly to inserts the message into a database and every five minutes a cron runs to send out all emails in the table and records them in a sent table.

**This accomplishes:**

- Making pages load faster, a DB insert is faster than a mail() function.
- Frees up server resources to host pages instead of doing sendmail’s.
- Determines really how many emails are being sent from the web server.
- Keeping track of what sites are sending mail from what pages and by who.
- The ability to flag emails before they are sent with keywords like “Viagra” and “Enlargement”.

We are currently just testing the system and hope to include it right into PHPSimpl as a main class but it still needs some stress testing. So far the tests have all came back positive, we have discovered a few of our own forms that have been taken advantage of and we resolved some potential issues.

We also over estimated the amount of emails being sent out, we thought with 200 or so sites it would be ~500-700 emails a day, well it turns out once we fixed a few of the forms we are only sending out ~100 emails a day, not bad.

The graph at the top of the post is the last 5 days and how many emails have been sent out. Today the 6th there has only been 4 emails so far at the time i took the screenshot, 8am.

On the 4th we saw a spike in bot related emails, after some investigation and a few [recaptcha](http://recaptcha.net/) additions we just about halved the number of emails the next day.

Next week we hope to have the system fully functional and have a better analysis and report of our findings.
