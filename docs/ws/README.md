# Introduction

If you are building an app or service that interacts with [LISTEN.moe](https://listen.moe) chances are you also want to provide with currently playing song information, and the WebSocket is the way to get it.

The WebSocket allows you to establish a connection and wait to be notified of new data in order to avoid spamming the API for updates. This means that whenever a song changes or a music event starts, we will notify you over the WebSocket for you to do with that data as you please.

First head over to the [spec](spec.html) to see how the WebSocket works and behaves and then take a code sample from [usage](usage.html) or write your own!
