---
title: "Google Photos - Downloaded videos not playing on Quicktime"
date: "2023-10-15"
description: "Google Photos changed video codecs from h264 to vp9 on downloaded videos"
---

<img src="/images/google-photos-error.png" alt="Screenshot of error playing video" class="md:w-1/3 float-right">

## Error playing new videos downloaded from Google Photos

Google Photos has been my go-to for photo integration for years. The photo saver option is surprisingly good at keeping the quality while offering unlimited uploads to Pixel owners. 

Thought it was an issue with my Pixel 4a 5G, but I recently moved to a Pixel 8 Pro and the same issue is occurring.

## From h264 to vp9

Google recently changed the video codec used when downloading videos from h264 to vp9. vp9 is a very good codec and works really well on the web. Unfortunately, Mac and Quicktime doesn’t play well with vp9 videos and not possible to edit in common video editing apps. 

Original video:  
`Stream #0:2[0x3]: Video: h264 (High) (avc1 / 0x31637661), yuvj420p(pc, bt709, progressive), 1920x1080, 21878 kb/s, SAR 1:1 DAR 16:9, 30 fps, 30 tbr, 90k tbn (default)`

Previous video download:  
`Stream #0:0[0x1]: Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, smpte170m/bt470bg/bt709, progressive), 1080x1920 [SAR 1:1 DAR 9:16], 8711 kb/s, 30 fps, 30 tbr, 15360 tbn (default)`

New video download:  
`Stream #0:0[0x1]: Video: vp9 (Profile 0) (vp09 / 0x39307076), yuv420p(tv, bt709), 1080x1920, 4186 kb/s, 60 fps, 60 tbr, 15360 tbn (default)`

## Converting back to h264

Re-encoding the video with ffmpeg is the only solution I have found.

`brew install ffmpeg`

To do an individual file:

`ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 output.mp4'`

Typically though I have an entire folder of videos downloaded to compile them together. Changing the command to loop over all the files in a folder:

`for i in */*.mp4; do ffmpeg -i "$i" -vcodec h264 -acodec aac -strict -2 "${i%.*}-h264.mp4"; done`

## Result

Although a slightly larger filesize, converting the videos now allows them to play natively on Mac OS and enables video editing applications to import the files.

![Screenshot of Mac Finder showing a working and broken file](/images/google-photos-result.png)