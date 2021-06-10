const root = GetResourcePath(GetCurrentResourceName());
const config = require(`${root}/config.js`);

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000/framework', {
	query: {
		APIKey: config.APIKey,
		serverKey: config.serverKey,
	},
	reconnect: true,
});

let client = { connected: false, config };

socket.on('connect_error', (error) => console.log('[ERROR] ' + error.message));

socket.on('log', ({ message }) => console.log(message));

socket.on('connected', () => (client.connected = true));
