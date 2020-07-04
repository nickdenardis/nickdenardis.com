---
title: "Popular sites and their lack of validation"
lastModified: "2007-08-19"
---

[![W3C Twitter Invalid](/images/twitter-invalid.gif)](http://twitter.com/)Launching a new site got me exploring some new code bases and I became disappointed with the disregard large social sites have for html validation of snippets they disburse to their user community.

Since I wanted my site plain and simple to start instead of writing a bunch of code to use common API’s I decided to first go with includes and badges from sites I commonly use. The three that I experienced while creating this site astonished me on their lack of attention to detail. At least they are trying to be compliant but unfortunately they are not fully committed yet.

**Twitter HTML Badge**

Twitter offers a nice super customizable HTML badge to include on a site. Which is great because it is a basic div, header and unsorted list and style is up to you. Placing the code they supply on your site makes it no longer validate. On their script tag they use an invalid parameter “text”. This looks like a typo and something simple to fix but where is the quality control? Shouldn’t someone test these types of things before they are rolled to production?

```
<div id="twitter\_div">  
<h2 class="twitter-title">Twitter Updates</h2>  
<ul id="twitter\_update\_list"></ul></div>  
<script type="text/javascript" src...  
<script text="text/javascript" src...  
```

**Flickr Flash Badge**

Flickr offers two types of badges the HTML one does surprisingly well except they do not escape the ampersands in the src of the script tag but that is something that can easily be done by the user.

```
<div id="flickr\_badge\_uber\_wrapper">...  
<script .. src="...?count=3&display=random&size=s&layout=x...  
</div></div>  
```

The flash version on the other hand includes an html page into an iframe but unfortunately the code in their html appears to have also been skipped by quality control. It has two main issues. Script and style sheets above the head of the document and non escaped characters in an html string that is outputted via document.write().

```
<!DOCTYPE ...  
<html>  
<script type="text/javascript" src="/javascript/fpi.js"></script>  
<style type="text/css">  
    body {margin:0; padding:0; background-color:#fff}  
</style>  
<head>  
    <title>Untitled</title>  
</head>  
<body>  
...  

...  
zg\_html = '<OBJECT classid=.../getflashplayer"></EMBED></OBJECT>';  
...  
```

**SimpleLog Archive Page**

[![SimpleLog Archive Nesting](/images/simplelog_archive_nesting.gif)](/archives/)Rails applications have been known for their agility and standards. It takes more than just a [script kiddie](http://en.wikipedia.org/wiki/Script_kiddie) to get a rails application into production. So when I installed and started to customize SimpleLog 2.0.2 for my site something stuck out like a soar thumb, the archives page in the default theme did not validate. There are two options for the html, an unsorted list or [definition list](http://www.w3schools.com/tags/tag_dl.asp). Neither of them are nested correctly which makes it almost impossible to apply a consistent style across browsers.

Without re-writing the entire helper for my site I just put some extra li elements in the output and cut it down to just one missing li. I have not had time to checkout the SVN trunk and create a patch.

**Final Thoughts**

By far the number of pages that do not validate outweigh the ones that do on the web but it is a shame to see small agile companies acting like large corporations when it comes to quality control. One of the benefits of having a small group or an open source application is the amount to time and attention each piece can get before it is released for peer review. It was put best in Jason’s [A collection of details](http://www.37signals.com/svn/posts/570-a-collection-of-details) post when he quotes Wil Shipley:

> “This is all your app is: a collection of tiny details.”

Web standards need to be enforced by the community and it is our job as web professionals to validate our own code and when possible give some helpful hints to other developers or companies who are not taking the appropriate amount of time to validate. I put in a ticket with twitter about the “text” element and in the process of creating a patch for SimpleLog’s archive page. I encourage all developers to run with standards and not be afraid to send an email or two to promote the health of the web. Who knows you could send that one simple email that turns thousands of pages valid.
