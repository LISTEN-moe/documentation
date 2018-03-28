---
id: websocket_1
title: Websocket Documentation
sidebar_label: Oof² page
---

## What for

If you are building an app or service that interacts with [LISTEN.moe](https://listen.moe) chances are you also want to provide with currently playing song information, and the websocket is the way to get it.

## Connecting

To connect to our websocket start by establishing a connection to `wss://listen.moe/gateway` or `wss://listen.moe/kpop/gateway` depending which platform you want to retrieve data from.

After the connection is established you have to authenticate yourself either with your credentials, or as an anonymous user if you don't need extended information of the playback. If you pick the latter just send an empty string as token, like in the example below.

```js
ws.onopen = () => {
	clearInterval(this.sendHeartbeat);
	const token = `Bearer ${your.token}` || '';
	ws.send(JSON.stringify({ op: 0, d: { auth: token } }));
};
```
> Extended information on the playback includes how many songs are in the queue, how many songs were queued by you and how many songs are in queue before your next song.

After authenticating, the websocket is gonna send you an `{ op: 0 }`, which means the websocket is asking you to prepare the heartbeat and it's interval to keep the connection alive. Depending if you authenticated yourself with a real token or not, the data should look like this:

```json
{
	"op": 0,
	"d": {
		"message": "Welcome to LISTEN.moe! Enjoy your stay!",
		"user": {
			"uuid": "random-uuid",
			"email": "your@email",
			"username": "kana",
			"displayName": "Kana"
		},
		"heartbeat": 45000
	}
}
```
An example implementation of heartbeat can be seen below:

```js
if (response.op === 0) return heartbeat(response.d.heartbeat);

heartbeat(ms) {
	this.sendHeartbeat = setInterval(() => {
		websocket.send(JSON.stringify({ op: 9 }));
	}, ms);
}
```
> A heartbeat is identified by sending back `{ op: 9 }`


## Retrieving data

Every time the current song changes you'll receive data on the websocket. Whenever you receive `{ op: 1 }` it means there is new data available for you to display. Data contains current song as well as the past 2 songs played, and a variety of information about it such as artist, album, source if any, duration, and if it's a favorite song or not depending if you authenticated on the first step.

An example object received when a message is received can be seen below:

```json
{
	"op": 1,
	"d": {
		"song": {
			"id": 450,
			"title": "Trust in you",
			"sources": [],
			"artists": [
				{
					"id": 186,
					"name": "sweet ARMS",
					"nameRomaji": null,
					"image": "sweet-ARMS_image.jpg"
				}
			],
			"albums": [],
			"duration": 273,
			"favorite": false
		},
		"requester": null,
		"event": null,
		"startTime": "2018-03-28T21:39:24.431Z",
		"lastPlayed": [
			{
				"id": 5918,
				"title": "おつかれサマー!",
				"sources": [],
				"artists": [
					{
						"id": 1589,
						"name": "でんぱ組.inc",
						"nameRomaji": null,
						"image": null
					}
				],
				"albums": [
					{
						"id": 272,
						"name": "おつかれサマー!",
						"nameRomaji": null,
						"image": null
					}
				],
				"duration": 273,
				"favorite": false
			},
			{
				"id": 2668,
				"title": "つけまつける",
				"sources": [],
				"artists": [
					{
						"id": 1169,
						"name": "きゃりーぱみゅぱみゅ",
						"nameRomaji": "Kyary Pamyu Pamyu",
						"image": "きゃりーぱみゅぱみゅ_image.jpg"
					}
				],
				"albums": [],
				"duration": 0,
				"favorite": false
			}
		],
		"listeners": 92
	},
	"t": "TRACK_UPDATE"
}
```
