import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom/ChatRoom';
import './App.css';

function App() {
	const [ roomId, setRoomId ] = useState(1);
	const [ userName, setUserName ] = useState('Mike');

	return (
		<div className="app">
			<ChatRoom roomId={roomId} userName={userName} />
		</div>
	);
}

export default App;
