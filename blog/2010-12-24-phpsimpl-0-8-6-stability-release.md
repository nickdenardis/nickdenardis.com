---
title: "PHPSimpl 0.8.6 Stability Release"
lastModified: "2010-12-24"
---

It's been a _long_ time since I have updated [PHPSimpl](http://code.google.com/p/phpsimpl/). It doesn't mean changes have not been happening, it has just been at a comfortable place for me. Expanding it would mean committing myself to many more hours when other resources are already available. So for now I will continue to maintain the framework while adding stability and speed enhancements. I don't have any new features in the queue.

**A rundown of the complete changes include:**

- Updated example
- Fixed an issue where the Insert() function does not work if there is a primary key that is not auto\_increment
- Fixed an issue with the radio form multi select to validate
- Added a h() function to output right from the DB, it does htmlspecialchars(stripslashes($text))
- Fixed the XML Output to include a "raw" parameter which only takes array options
- Added the ability to send $options\['fields'\] to the DbTemplate->Save() function to only save certain fields in the DB
- Updated the SetValues() to urldecode hidden form fields because they were not in the past
- Fixed issue #58 where SetValue() time was stripping the seconds off
- Made some changes to the regex for php5 latest
- Made some changes to help with php5.3 deprecations
- Fixed most of the Notices in PHPSimpl
- Fixed the Email validation in the Mail() class. It now allows .'s and -'s in the address
- Now allow the ability to change the encoding of an Email when setting the Body(). Basically for base64 content
- A few other minor bug fixes

This is a Recommended Update

- [PHPSimpl 0.8.6 (105Kb) Download](http://phpsimpl.googlecode.com/files/phpsimpl-0.8.6.zip)
- [Installation Guide](http://code.google.com/p/phpsimpl/wiki/Installation)
- [API and Examples](http://code.google.com/p/phpsimpl/wiki/BaseClasses)

Questions or Comments? Feel free to leave them in the [PHPSimpl Group](http://groups.google.com/group/phpsimpl). There is always someone to help available. By the way we love feature requests, keep them coming.
