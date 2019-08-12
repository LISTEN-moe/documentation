# Specification

## Connecting

To connect to our websocket start by establishing a connection to `wss://listen.moe/gateway_v2` or `wss://listen.moe/kpop/gateway_v2` depending which platform you want to retrieve data from.

## Received OP Codes

* `OP 0` - Received welcome and heartbeat interval
* `OP 1` - Received playback information

## Sending OP Codes

* `OP 9` - Send heartbeat to keep connection alive

## Heartbeating

After connecting, the websocket is going to send you a `{ op: 0 }`, which means the websocket is asking you to prepare the heartbeat and it's interval to keep the connection alive. The data should look like this:

```json
{
	"op": 0,
	"d": {
		"message": "Welcome to LISTEN.moe! Enjoy your stay!",
		"heartbeat": 45000
	}
}
```

> A heartbeat is sent via `{ op: 9 }` and acknowledged by getting `{ op: 10 }` returned.

## Receiving data

Only the `d` property of `OP 0` and `OP 1` contain actual data received from the WebSocket.
The `t` property of `OP 1` is to identify the data received, it can be one of the following:

* `TRACK_UPDATE`
* `TRACK_UPDATE_REQUEST`

Every time the current song changes you'll receive data on the WebSocket. Data contains the current song as well as the past 2 songs played, and a variety of information about it such as artist, album, source if any, duration, and if it's a favorite song or not depending if you authenticated or not.

An example of `OP 1` data looks like this:

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

`TRACK_UPDATE` and `TRACK_UPDATE_REQUEST` can be the possible values depending on if you sent `OP 2` or not.


The `d.requester` and `d.event` property is either `null` or an `object` containing information about the requester or event:

```json
"requester": {
	"name": "some-username"
}
```

```json
"event": {
	"name": "some-event-name",
	"image": "some-image.jpg"
}
```
