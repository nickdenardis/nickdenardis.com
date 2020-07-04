---
title: "Stress testing a site with Apache's ab tool, part 1"
lastModified: "2007-06-27"
---

Apache’s AB tool is a great way to really put stress on a server. I have compiled a list of the parameters I use to test my sites and applications.

First we have to make sure AB can hit the desired page and get the desired results. The most basic page is the homepage of a site, use the command below to send as many single requests as it can in 1 second  

ab http://example.com/

But that is great and dandy but what happens if we want to try to stress a page that hits the database and has to do some actual dynamic work  

ab http://example.com/search.php?q=Trees

Last but not least what if the site is behind a login that is an http form and not an htaccess form? That is where POST variables come into play, it is a little trickier but doable. Here is the command I use to hit a page behind a login.  

ab -p ~/Documents/post.txt -T application/x-www-form-urlencoded -e http://example.com/manager/

Here is what my post.txt file contains:  

email=test@domain.com&password=testing&amp;submit=Login

Next we need to get these results to a file so we can work with them and have a record of progress as we tweak our site. It can be done with the “-e” parameter. An example is below:  

ab http://example.com/search.php?q=Trees -e ~/Documents/results1.csv  

What that does is hits the search page and puts the results in the results1.csv file. It is useful to put the file at the end of the command since you will want to change the filename on each run to keep a history of your results.

The csv file is separated into two columns. The first is the percentage complete and the second is the time in ms that it took to get to that percentage.

The first thing you want to look at is the zero percent. This is your latency, it is the amount of time it takes to fulfill the first request. You want this number to be as low as possible. I am running my site on a development server on my local network so the times will be lower but at the end I will show the results from the testing server.  

ab -p ~/Documents/aci\_post.txt -T application/x-www-form-urlencoded -e ~/Documents/aci\_output.csv -kc 10 -t 10 http://aci/manager/makes.php

Hold tight, more coming soon…
