---
title: "New PHPSimpl caching system"
lastModified: "2007-02-18"
---

It has been a little bit but a few things have happened in the past month or so. We implemented a new caching system that will speed up the saving and retrieving of table cache to the filesystem. There is no change in the API, the only thing that you will notice is that the cache now has a “table\_\*.cache.php” naming format. This was changed to distinguish it from the other caches that have been implemented in the past month.

The other caching that has been implemented is the query cache. This is a simple system that is enabled by a boolean define named “QUERY\_CACHE”, if it is set to true every time a “SELECT” query comes through $qb->Query() it saves its results to a file. So next time the same query comes around there is no need to re-query the database for the same information it is already available in the cache. This query will stay in cache till $db->Perform() is called which at that time all the query caches are cleared out. We have found this is a significant increase in performance for large queries that require a few joins and sorting.

This also brings up the situation where possibly all the queries on the page are found in cache and we got to thinking why even bother connecting to the database unless we really need to. So Simpl now will not connect to the database until the first query comes by that could not be found in cache. We have found that this also improves performance especially if the database is on a separate machine. There is only one downside to this addition, when calling $db->Connect() it will always return true since it just stores the database information and waits for the first query, you will no longer be able to check on connect if the database is available or not, it will always look available.

The last functionality that was added was the deprecation of the “CLEAR\_CACHE” define. Currently it is still working for backwards compatibility but will soon be removed. It has been replaced by the use of a GET variable that can be used on any page. There are two that will be able to clear specific caches and one that will clear all the caches.  

page.php?clear -> Clears all the caches (table and query)  
page.php?clear\_query -> Clears just the query cache  
page.php?clear\_table -> Clears just the table cache

You can call these GET variables on any page that creates the “mySimpl” class and the cache will be cleared.
