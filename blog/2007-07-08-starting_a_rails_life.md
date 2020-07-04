---
title: "Starting a Rails Life"
lastModified: "2007-07-08"
---

![](/images/rails.png "Ruby on Rails")My rails life seems to be starting out similar to my php life. It all began with an internal application for my dad. He has a music instrument sales, rental and repair business and he initially did everything on paper to keep track of customers, instruments and billing. I took it upon myself to create a web based application for him to keep track of all of it. It was my first php application written in php3 and run on a small server here in the house. It is amazing that it is still running and he still uses it.

That was 7 years ago and looking back at the code now I cringe. Sometime in between there and now it was upgraded to php4 and it looks like that was a hack of a job. But since then my php life has expanded to the point of it no longer being a challenge. So what else would be a better way to start my Rails life than to revisit my dads billing application and recreate it with rails. Of course fixing all the issues with the current billing process and adding some additional features to make life easier.

[![](/images/753483955_93bcbea292_m.jpg)](http://www.flickr.com/photos/dorkstyle/753483955/ "photo sharing")To the right is a screen shot of the current functionality and design. I am currently just working on getting the layout squared away so functionality can be added without having to stop and think how it should look. So far only 56 lines of code have been written and about 4 hours have been spent on the project, 2.5 being spent coming up with a design and 1 hour spent implementing and tweaking it. So far rails has been a dream come true.

Coming from php which is mainly mirrored from C++ I have always been use to the long hand conditionals. One thing that rails offers is the “unless” command. Compacting an if statement into one line that can be read without much difficulty. Here is an example of its use, probably not the most efficient but I am sure it will get tweaked once more come into play.  

<%= ' class="selected"' unless controller.controller\_name != 'customer' %>
