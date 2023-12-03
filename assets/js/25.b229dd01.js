(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{406:function(e,t,s){"use strict";s.r(t);var a=s(4),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Apache’s AB tool is a great way to really put stress on a server. I have compiled a list of the parameters I use to test my sites and applications.")]),e._v(" "),t("p",[e._v("First we have to make sure AB can hit the desired page and get the desired results. The most basic page is the homepage of a site, use the command below to send as many single requests as it can in 1 second")]),e._v(" "),t("p",[e._v("ab http://example.com/")]),e._v(" "),t("p",[e._v("But that is great and dandy but what happens if we want to try to stress a page that hits the database and has to do some actual dynamic work")]),e._v(" "),t("p",[e._v("ab http://example.com/search.php?q=Trees")]),e._v(" "),t("p",[e._v("Last but not least what if the site is behind a login that is an http form and not an htaccess form? That is where POST variables come into play, it is a little trickier but doable. Here is the command I use to hit a page behind a login.")]),e._v(" "),t("p",[e._v("ab -p ~/Documents/post.txt -T application/x-www-form-urlencoded -e http://example.com/manager/")]),e._v(" "),t("p",[e._v("Here is what my post.txt file contains:")]),e._v(" "),t("p",[e._v("email=test@domain.com&password=testing&submit=Login")]),e._v(" "),t("p",[e._v("Next we need to get these results to a file so we can work with them and have a record of progress as we tweak our site. It can be done with the “-e” parameter. An example is below:")]),e._v(" "),t("p",[e._v("ab http://example.com/search.php?q=Trees -e ~/Documents/results1.csv")]),e._v(" "),t("p",[e._v("What that does is hits the search page and puts the results in the results1.csv file. It is useful to put the file at the end of the command since you will want to change the filename on each run to keep a history of your results.")]),e._v(" "),t("p",[e._v("The csv file is separated into two columns. The first is the percentage complete and the second is the time in ms that it took to get to that percentage.")]),e._v(" "),t("p",[e._v("The first thing you want to look at is the zero percent. This is your latency, it is the amount of time it takes to fulfill the first request. You want this number to be as low as possible. I am running my site on a development server on my local network so the times will be lower but at the end I will show the results from the testing server.")]),e._v(" "),t("p",[e._v("ab -p ~/Documents/aci_post.txt -T application/x-www-form-urlencoded -e ~/Documents/aci_output.csv -kc 10 -t 10 http://aci/manager/makes.php")]),e._v(" "),t("p",[e._v("Hold tight, more coming soon…")])])}),[],!1,null,null,null);t.default=o.exports}}]);