import io from 'socket.io-client';
const ws_endpoint = process.env.REACT_APP_WS_URL;
const socket = io(ws_endpoint);

const RoomAPI = {
	joinRoom: (roomId) => {},

	addRoom: (roomName) => {}
};

const ChatAPI = {
	sendNewMessage: (roomId, msg) => {
		socket.emit('new_message', roomId, msg);
	},

	subscribeToNewMessages: (cb) => {
		socket.on('new_message_broadcast', (msg) => {
			cb(msg);
		});
	},

	unsubscribeFromNewMessages: () => socket.removeListener('new_message_broadcast'),

	loadOldMessages: (cb) => {
		const roomId = 1;
		socket.emit('requesting_messages', roomId);
		socket.on('loaded_messages', (msgs) => {
			cb(msgs);
		});
		return () => socket.removeListener('loaded_messages');
	}
};

export { ChatAPI, RoomAPI };
