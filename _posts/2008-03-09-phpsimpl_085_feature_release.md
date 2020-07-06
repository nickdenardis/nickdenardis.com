---
title: "PHPSimpl 0.8.5 Feature Release"
date: "2008-03-09"
---

Long awaited features now implemented. Main highlights include cross database join’s. Functions on DisplayList() fields and a way to change where the required indicator (\*) is on forms and the character that is displayed after the label.

A rundown of the complete changes include:

- Updated example
- Completely rewritten Export class with CVS, JSON, XML and SQL support
- Export() function on DbTemplate for seamless exporting
- Removed the requirement to have DB\_DEFAULT defined
- DisplayList() now places a   for NULL table values for IE border support
- GetList() and Join() now support cross database queries
- Added the “required” class to the field items that are required
- DisplayList() $options can now take a function name as a value for a field.
- Added the DateTimeDiff() function to the global functions to produce a human readable “time ago” output.
- Added a type of “settings” for forms to manipulate the Form::Form() function output.
- A few bug fixes.

This is a Recommended Update

- [PHPSimpl 0.8.5 (100Kb) Download](http://phpsimpl.googlecode.com/files/phpsimpl-0.8.5.zip)
- [Installation Guide](http://code.google.com/p/phpsimpl/wiki/Installation)
- [API and Examples](http://code.google.com/p/phpsimpl/wiki/BaseClasses)

Questions or Comments? Feel free to leave them in the [PHPSimpl Group](http://groups.google.com/group/phpsimpl). There is always someone to help available. By the way we love feature requests, keep them coming.
