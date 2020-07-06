---
title: "Save the Environment - Ditch the home server"
date: "2007-10-15"
---

[![Jungle Disk](/images/jdisk.gif)](http://jungledisk.com/ "Jungle Disk")Most technical people I know have at least one server in their house to share files and or keep backups of their important stuff. Mine is on 24/7, it takes quite a bit of time to manage and I always worry if my data is really secure. It happens to sit in my basement in the same house my main computer, if there were a disaster all the data would be gone with everything else.

[AmazonS3](http://aws.amazon.com) is by far the best thing to happen to small time data management, well even large scale data management. And a software application [JungleDisk](http://jungledisk.com/) that seamlessly connects your computer, Windows, OSX, Linux directly to the storage service.

A server running 24/7 uses a lot of energy. Lets say on average a mid range computer without monitor uses 152 watts of power. That is almost twice the amount of energy a TV needs. So doing a rough estimate of the math,  
((Watts \* Hours \* Days) / 1000 kwh) \* 1.4 kWh Rate = Cost per Year.  
((152 \* 24 \* 365)/1000) \* 0.14 = **$186.41 per Year**.  
Now that is a lot of money not including the hardware and the time it takes to maintain the software and configuration.

I have JungleDisk setup two ways, a bucket for “files” which is my documents that I need to get to often and I use it like a Documents folder. And another “backup” bucket which I use for automatic backup each night of my whole system.

I have ~20 gigs stored on the drives and it only costs me ~2.50 a month for the storage, so **$30.00 per Year**. 1/3rd the cost, no maintenance time, and no initial cost for the hardware or setup. Not to mention your data is now in a secure 24/7 location and your helping to save the environment.

Since Amazon has so much storage it can efficiently handle the distribution across its systems. It can use a greater percentage of each of the drives producing a smaller cost (wattage wise) per gigabyte stored. This cost savings would not be able to be achieved if everyone had a house with a personal file server using 152 watts of power and only using 30% or so of the actual space on the drive.

I encourage everyone to try it out. Amazon has no setup fee or no minimum amount to spend per month, in fact my first few months only cost me $0.02 each. In the spirit of saving the environment I am announcing that I am turning off my home file server as of today. No more 24/7 usage and a definite relief on me and the environment.

For other ways to save the environment, check out today’s major initiative named [Blog Action Day](http://blogactionday.com/).
