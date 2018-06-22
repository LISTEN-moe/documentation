# Usage

## JavaScript

A simple JavaScript implementation could be as follows:

```js
const WebSocket = require('ws');
const jwt = null // Or the user's saved JWT;
let ws;

class SocketConnection {
	constructor() {
		this.sendHeartbeat = null;
		this.websocketConnection();
	}

	heartbeat(websocket, ms) {
		this.sendHeartbeat = setInterval(() => {
			websocket.send(JSON.stringify({ op: 9 }));
		}, ms);
	}

	websocketConnection() {
		if (ws) {
			ws.close();
			ws = null;
		}
		ws = new WebSocket('wss://listen.moe/gateway');
		ws.onopen = () => {
			clearInterval(this.sendHeartbeat);
			const token = `Bearer ${jwt}` || '';
			ws.send(JSON.stringify({ op: 0, d: { auth: token } }));
		};
		ws.onmessage = message => {
			if (!message.data.length) return;
			try {
				var response = JSON.parse(message.data);
			} catch (error) {
				return;
			}
			if (response.op === 0) return this.heartbeat(ws, response.d.heartbeat);
			if (response.op === 1) {
				if (response.t !== 'TRACK_UPDATE'
				&& response.t !== 'TRACK_UPDATE_REQUEST'
				&& response.t !== 'QUEUE_UPDATE') return;

				const data = response.d;
				// Now we do with data as we wish.
			}
		};
		ws.onclose = err => {
			if (err) {
				clearInterval(this.sendHeartbeat);
				if (!err.wasClean) setTimeout(() => this.websocketConnection(), 5000);
			}
			clearInterval(this.sendHeartbeat);
		};
	}
}

const socket = new SocketConnection();
```

## Python

Python3 implementation that uses the websockets library.

```python
# python >= 3.5, websockets~=4.0.1

from pprint import pprint
import json
import asyncio

import websockets

async def send_ws(ws, data):
	json_data = json.dumps(data)
	await ws.send(json_data)

async def _send_pings(ws, interval=45):
	while True:
		await asyncio.sleep(interval)
		msg = {
			'op': 9
		}
		await send_ws(ws, msg)

async def main(loop):
	url = 'wss://listen.moe/gateway'
	ws = await websockets.connect(url)

	msg = {"op": 0, "d": {"auth": ""}}
	await send_ws(ws, msg)

	while True:
		data = json.loads(await ws.recv())

		if data['op'] == 0:
			heartbeat = data['d']['heartbeat'] / 1000
			loop.create_task(_send_pings(heartbeat))
		elif data['op'] == 10:
			# ignore pings
			continue
		else:
			pprint(data)
			# Now we do with data as we wish.

if __name__ == '__main__':
	loop = asyncio.get_event_loop()
	loop.run_until_complete(main(loop))
```
