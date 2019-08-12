# Usage

## JavaScript

A simple JavaScript implementation could be as follows:

```js
let heartbeatInterval;
let ws;

function heartbeat(interval) {
	heartbeatInterval = setInterval(() => {
		ws.send(JSON.stringify({ op: 9 }));
	}, interval);
}

function connect() {
	ws = new WebSocket('wss://listen.moe/gateway_v2');

	ws.onopen = () => {
		clearInterval(heartbeatInterval);
		heartbeatInterval = null;
	};

	ws.onmessage = message => {
		if (!message.data.length) return;
		let response;
		try {
			response = JSON.parse(message.data);
		} catch (error) {
			return;
		}
		switch (response.op) {
			case 0:
				ws.send(JSON.stringify({ op: 9 }));
				heartbeat(response.d.heartbeat);
				break;
			case 1:
				if (response.t !== 'TRACK_UPDATE' && response.t !== 'TRACK_UPDATE_REQUEST' && response.t !== 'QUEUE_UPDATE' && response.t !== 'NOTIFICATION') break;
				console.log(response.d); // Do something with the data
				break;
			default:
				break;
		}
	};

	ws.onclose = error => {
		clearInterval(heartbeatInterval);
		heartbeatInterval = null;
		if (ws) {
			ws.close();
			ws = null;
		}
		setTimeout(() => connect(), 5000);
	};
}

connect();
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
		msg = { 'op': 9 }
		await send_ws(ws, msg)

async def main(loop):
	url = 'wss://listen.moe/gateway_v2'
	ws = await websockets.connect(url)

	while True:
		data = json.loads(await ws.recv())

		if data['op'] == 0:
			heartbeat = data['d']['heartbeat'] / 1000
			loop.create_task(_send_pings(ws, heartbeat))
		elif data['op'] == 1:
			pprint(data)
			# Now we do with data as we wish.

if __name__ == '__main__':
	loop = asyncio.get_event_loop()
	loop.run_until_complete(main(loop))
```
