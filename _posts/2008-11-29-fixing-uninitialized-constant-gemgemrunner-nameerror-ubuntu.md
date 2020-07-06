---
title: "Fixing: uninitialized constant Gem::GemRunner (NameError) - Ubuntu"
date: "2008-11-29"
---

After upgrading to the newest version of rails (2.2.2) I was getting this error:

administrator@shuttle:~/$ gem -v
/usr/bin/gem:10:Warning: Gem::manage\_gems is deprecated and will be removed on or after March 2009.
/usr/bin/gem:23: uninitialized constant Gem::GemRunner (NameError)

Anytime I called "gem" I would get this error and could not get past.

## Here is the fix

administrator@shuttle:~/$ sudo vim /usr/bin/gem

Change the top of the file to look like this:

require 'rubygems'
require 'rubygems/gem\_runner'
#Gem.manage\_gems

Save and when you run this you should see this:

administrator@shuttle:~/$ gem -v
1.3.1

You should no longer get the error with running "gem"
