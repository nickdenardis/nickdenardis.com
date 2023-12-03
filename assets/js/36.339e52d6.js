(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{418:function(t,e,a){"use strict";a.r(e);var i=a(4),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"http://twitter.com/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"/images/twitter-invalid.gif",alt:"W3C Twitter Invalid"}}),e("OutboundLink")],1),t._v("Launching a new site got me exploring some new code bases and I became disappointed with the disregard large social sites have for html validation of snippets they disburse to their user community.")]),t._v(" "),e("p",[t._v("Since I wanted my site plain and simple to start instead of writing a bunch of code to use common API’s I decided to first go with includes and badges from sites I commonly use. The three that I experienced while creating this site astonished me on their lack of attention to detail. At least they are trying to be compliant but unfortunately they are not fully committed yet.")]),t._v(" "),e("p",[e("strong",[t._v("Twitter HTML Badge")])]),t._v(" "),e("p",[t._v("Twitter offers a nice super customizable HTML badge to include on a site. Which is great because it is a basic div, header and unsorted list and style is up to you. Placing the code they supply on your site makes it no longer validate. On their script tag they use an invalid parameter “text”. This looks like a typo and something simple to fix but where is the quality control? Shouldn’t someone test these types of things before they are rolled to production?")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div id="twitter\\_div">  \n<h2 class="twitter-title">Twitter Updates</h2>  \n<ul id="twitter\\_update\\_list"></ul></div>  \n<script type="text/javascript" src...  \n<script text="text/javascript" src...  \n')])])]),e("p",[e("strong",[t._v("Flickr Flash Badge")])]),t._v(" "),e("p",[t._v("Flickr offers two types of badges the HTML one does surprisingly well except they do not escape the ampersands in the src of the script tag but that is something that can easily be done by the user.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div id="flickr\\_badge\\_uber\\_wrapper">...  \n<script .. src="...?count=3&display=random&size=s&layout=x...  \n</div></div>  \n')])])]),e("p",[t._v("The flash version on the other hand includes an html page into an iframe but unfortunately the code in their html appears to have also been skipped by quality control. It has two main issues. Script and style sheets above the head of the document and non escaped characters in an html string that is outputted via document.write().")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE ...  \n<html>  \n<script type="text/javascript" src="/javascript/fpi.js"><\/script>  \n<style type="text/css">  \n    body {margin:0; padding:0; background-color:#fff}  \n</style>  \n<head>  \n    <title>Untitled</title>  \n</head>  \n<body>  \n...  \n\n...  \nzg\\_html = \'<OBJECT classid=.../getflashplayer"></EMBED></OBJECT>\';  \n...  \n')])])]),e("p",[e("strong",[t._v("SimpleLog Archive Page")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/archives/"}},[e("img",{attrs:{src:"/images/simplelog_archive_nesting.gif",alt:"SimpleLog Archive Nesting"}})]),t._v("Rails applications have been known for their agility and standards. It takes more than just a "),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Script_kiddie",target:"_blank",rel:"noopener noreferrer"}},[t._v("script kiddie"),e("OutboundLink")],1),t._v(" to get a rails application into production. So when I installed and started to customize SimpleLog 2.0.2 for my site something stuck out like a soar thumb, the archives page in the default theme did not validate. There are two options for the html, an unsorted list or "),e("a",{attrs:{href:"http://www.w3schools.com/tags/tag_dl.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("definition list"),e("OutboundLink")],1),t._v(". Neither of them are nested correctly which makes it almost impossible to apply a consistent style across browsers.")],1),t._v(" "),e("p",[t._v("Without re-writing the entire helper for my site I just put some extra li elements in the output and cut it down to just one missing li. I have not had time to checkout the SVN trunk and create a patch.")]),t._v(" "),e("p",[e("strong",[t._v("Final Thoughts")])]),t._v(" "),e("p",[t._v("By far the number of pages that do not validate outweigh the ones that do on the web but it is a shame to see small agile companies acting like large corporations when it comes to quality control. One of the benefits of having a small group or an open source application is the amount to time and attention each piece can get before it is released for peer review. It was put best in Jason’s "),e("a",{attrs:{href:"http://www.37signals.com/svn/posts/570-a-collection-of-details",target:"_blank",rel:"noopener noreferrer"}},[t._v("A collection of details"),e("OutboundLink")],1),t._v(" post when he quotes Wil Shipley:")]),t._v(" "),e("blockquote",[e("p",[t._v("“This is all your app is: a collection of tiny details.”")])]),t._v(" "),e("p",[t._v("Web standards need to be enforced by the community and it is our job as web professionals to validate our own code and when possible give some helpful hints to other developers or companies who are not taking the appropriate amount of time to validate. I put in a ticket with twitter about the “text” element and in the process of creating a patch for SimpleLog’s archive page. I encourage all developers to run with standards and not be afraid to send an email or two to promote the health of the web. Who knows you could send that one simple email that turns thousands of pages valid.")])])}),[],!1,null,null,null);e.default=s.exports}}]);