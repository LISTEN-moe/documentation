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
