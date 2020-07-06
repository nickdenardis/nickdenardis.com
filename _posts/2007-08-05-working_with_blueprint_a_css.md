---
title: "Working with Blueprint: A CSS Framework"
date: "2007-08-05"
---

[![SimpleLog base install](/images/1007974311_4619370871_m.jpg)](http://www.flickr.com/photos/dorkstyle/1007974311/ "Photo Sharing")So I decided to change my blogging software, from no software ([Blogger](http://blogger.com/)) to [SimpleLog](http://simplelog.net/). I setup everything up in my dev environment and it was by far the easiest setup I have seen so far. Took about 10 minutes including setting up the virtual hosts.

While getting super interested in my blog again I was looking for some nice examples of css blogs to get inspired I stumbled upon [Blueprint](http://bjorkoy.com/blueprint/), which is a css framework so I decided to give it a whirl.

First impressions it is super lightweight and non-intrusive, just two lines that have to be added. to the head which includes the style sheets. My only gripe so far was that they just include one grid option which is 14 columns, its not a big deal all that I think it needs is a few other background images to show the options of columns from the grid. Like 7 columns, 3×8x3 and so forth.

[![nickdenardis.com in progress](/images/1019903198_dcd24b201f_m.jpg)](http://www.flickr.com/photos/dorkstyle/1019903198/ "Photo Sharing")So I hit up Photoshop and came up with a basic color scheme and outline for the new blog. Took about a day of going back and forth on how much I wanted to add to the site but being inspired by rails iterative approach to programming I decided to stick with the simple and expand from there.

Back to Blueprint, with my design it ended up being very easy to implement in blueprint. It doesn’t have anything nested tho which I was really interested in since it looked to handle nesting very gracefully. I tried as hard as I could to make this design fit into a 14 column grid but I made the design decision to keep the width at 780 instead of Blueprints default of 960. But not to fear we are just working with css here all I did was just override two of their default widths in my screen.css to keep the integrity of their files in case I decided to upgrade them in the future it will be fully degradable.

Their reset.css worked great, I am use to using [Eric Meyers reset.css](http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/) and then creating everything from there. But Blueprint had an unexpected typography.css which setup quite a bit of the default typography. Which was a huge time saver, because Eric’s just leaves you out in the cold to setup everything on your own which is totally cool if your project warrants it but sometimes there are elements that get introduced and have no control over.

[![SimpleLog + Blueprint Base](/images/1020085600_83041d3c20_m.jpg)](http://www.flickr.com/photos/dorkstyle/1020085600/ "Photo Sharing")So setting up a new template in SimpleLog was easy and I started editing the site.rhtml layout to use the naming conventions per Blueprint. Just a few class changes and I removed some default SimpleLog items that I didn’t include in my final design and boom! We have an outline!

Fast forward through time, 26 css declarations and 3 images later and my homepage was almost done. Time in total was about 2 hours to copy and setup an entire new template with SimpleLog and Blueprint. I was amazed, usually I hate when things try to be “smart” and assume they know what options and action you are going to preform but Blueprint didn’t get in my way at all. Since everything for the base elements was already setup I just used my ID’s and Classes to extend the base and life was good.

Although I was just concentrating on the homepage today flipping through all the other pages they didn’t look that bad by default. SimpleLog uses a lot of the same css names and conventions throughout their pages meshed with Blueprints base styles and my overrides the only things left to do were the specifics of the page.

[![Initial design for nickdenardis.com](/images/1020203506_6822f2e3e3_m.jpg)](http://www.flickr.com/photos/dorkstyle/1020203506/ "Photo Sharing")

  
Last but not least, my current host is not very Rails friendly so I am looking for a new host for my blog. While doing that I will continue to update here and work on the new version on my dev server. So far:

### SimpleLog: A+

- Ton of features and rock solid. Easy install and great documentation. I have not looked into any extensions or plugins yet but there are a few areas where I can see a few more helper functions. But for getting a blog up quick and painless SimpleLog is the way to go.
- [SimpleLog](http://simplelog.net/) Website

### Blueprint: A-

- For just being at 0.3 release it is a huge time saver, its not just the resets for cross browser compatibility but it also includes a good typography and print styles which I have always been looking to create. I hate going through and trying to think of all the HTML elements a client could potentially use and make sure they are set accordingly. Blueprint defiantly has a future in my web development life and releasing it to the community will only make it better.
- [Blueprint CSS Framework](http://blueprintcss.googlecode.com/) Website
