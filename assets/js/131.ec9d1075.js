(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{513:function(e,t,a){"use strict";a.r(t);var i=a(4),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"question"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[e._v("#")]),e._v(" Question:")]),e._v(" "),t("p",[e._v("Recently, I saw you call out the negatives of using images instead of textual H1s. I’m completely on your side, but saw Matt Cutts recently speak about the design benefits of using a graphic head, and simply alt-tagging the H1 image with your text. There are some obvious aesthetic benefit possibilities with that approach, and I wanted to know if you thought that was an “acceptable” solution.")]),e._v(" "),t("h2",{attrs:{id:"answer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[e._v("#")]),e._v(" Answer:")]),e._v(" "),t("p",[e._v("Thanks for asking this question, I was actually just thinking about this the other day. Here is my stance, when ever possible using real type in the header is the best solution, if that is not possible using a print friendly (logo with white background) IMG inside of an H1 will suffice as long as the appropriate ALT text is defined. After talking to and watching a few people use screen readers the ALT text does work as if it was just text on the page.")]),e._v(" "),t("p",[e._v("Nothing beats real text for accessibility, filesize and search engine optimization but I realize that is not always possible. Depending on the logo you may be able to use some web fonts to replicate it natively but that is probably limited for most people. The likely solution would be using an image that would print well inside of an H1 using a real IMG tag with the appropriate ALT text defined. What I mean by a printable image is one with a white background and black type. This will ensure when someone prints the page it doesn't look funky with a block solid color background and inverted logo as if it were displayed on the web.")]),e._v(" "),t("p",[e._v('To transform the printer friendly IMG I suggest using CSS to hide it and replace it for on screen viewing with part of a sprite. This will allow you to use the existing style of the site for various platforms, if you are using media queries. Since printing from the browser doesn\'t typically have the "print background colors" option turned on this is the best approach to make your site look good on paper, screen and load quickly since you are using sprites.')]),e._v(" "),t("p",[e._v("I explain an example implementation in a blog post I wrote early last year: "),t("a",{attrs:{href:"http://wcs.wayne.edu/blog/2010/03/26/tweaks-to-the-global-header-and-footer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://wcs.wayne.edu/blog/2010/03/26/tweaks-to-the-global-header-and-footer/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);