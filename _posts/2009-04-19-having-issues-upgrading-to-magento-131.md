---
title: "Having issues upgrading to Magento 1.3.1"
date: "2009-04-19"
---

[Magento 1.3.1 was just released](http://www.magentocommerce.com/blog/comments/magento-version-131-now-available/) with a few new features and bug fixes. I decided to upgrade my test environment for a client site that is launching soon.

## Going through Magento Connect

I get the following errors:

magento-core/mage\_core\_adminhtml requires package “magento-core/Mage\_Core\_Modules”
(version >= 1.3.0, version <= 1.3.0), downloaded version is 1.3.1
...
Install Errors
No valid packages found
PEAR ERROR: upgrade failed

It was giving me this error for all packages, requiring an odd version and not letting me go any further.

## Searching around

Looking around I couldn't find any fixes for this issue. There were a few people who had the same issue but no replies to their forum threads.

## The Solution

Upgrade the installation via command line. For some reason going through the web interface just did not work. But if you have SSH access (which you should) to your server just navigate to your Magento install directory and run the following commands. I believe this works on both Linux and Windows servers.

./pear upgrade-all
rm -rf downloader/pearlib/cache/\*
rm -rf var/cache/\*

And then tada! "Magento ver. 1.3.1" should show up in the footer of your admin area.
