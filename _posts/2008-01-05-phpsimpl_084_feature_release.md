---
title: "PHPSimpl 0.8.4 Feature Release"
date: "2008-01-05"
---

[![Jumping into the lake](/images/2159763083_11518964c1_m.jpg)](http://www.flickr.com/photos/dorkstyle/2159763083/ "Jumping into the lake by Dorkstyle, on Flickr")Yay! New Year, New Release. Its been a while since our last release and we apologize, all of us have been pretty busy and we were down two full time developers in the department. This release is a mix of additional features and bug fixes. We hope to release more often this year since we will have filled one and will fill the other position shortly. The updated below are all to the PHPSimpl core there has been no updates to the examples or the wiki API documentation. 0.8.5 will bring a massive update to documentation and optimization, hold tight we hope to have it out within the next two months.

- Removed all dependency on a Primary Key except for the Move() function
- Added the IsConnected() function for the DB object
- Added the Insert() and Update() functions for tables without primary key
- Added the ID attribute to the hidden form fields
- Fixed issue with double quotes being in hidden fields, the would close the HTML tag
- Fix for 12/31/1969 problem in DbTemplate:SetValue()
- Fixed problem with IE-7 and popup-calendar location
- Fix for invalid date input on Form::SetValues()
- Fixed an issue with the export when there is no display passed

This is a Recommended Update

- [PHPSimpl 0.8.4 (96Kb) Download](http://phpsimpl.googlecode.com/files/phpsimpl-0.8.4.zip)
- [Installation Guide](http://code.google.com/p/phpsimpl/wiki/Installation)
- [API and Examples](http://code.google.com/p/phpsimpl/wiki/BaseClasses)

Questions or Comments? Feel free to leave them in the [PHPSimpl Group](http://groups.google.com/group/phpsimpl). There is always someone to help available. By the way we love feature requests, keep them coming.
