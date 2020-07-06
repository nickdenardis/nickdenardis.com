---
title: "Fixing: undefined method `require_gem' for main:Object (NoMethodError)"
date: "2009-02-14"
---

After upgrading to the newest version of rails (2.2.2) I was getting this error:

administrator@shuttle:~$ rails -v/usr/bin/rails:17: undefined method \`require\_gem' for main:Object (NoMethodError)

Anytime I called “rails” I would get this error and could not get past.

## Here is the fix

administrator@shuttle:~/$ sudo vim /usr/bin/rails

Look for anywhere in the file that calls "require\_gem", I found it in only one spot:

require\_gem 'rails', version

And change "require\_gem" to just "gem" so:

gem 'rails', version

Save and when you run "rails -v" you should see this:

administrator@shuttle:~/$ rails -vRails 2.2.2

You should no longer get the error with running "rails"
