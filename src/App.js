import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChatRoom from './ChatRoom/ChatRoom';
import RoomsPage from './RoomsPage/RoomsPage';
import './App.css';

function App() {
	const [ roomId, setRoomId ] = useState(1);
	const [ userName, setUserName ] = useState('Mike');

	return (
		<Router>
			<div className="app">
				<Route exact path="/" render={(props) => <RoomsPage {...props} setRoomId={setRoomId} />} />
				<Route path="/room/:id" render={(props) => <ChatRoom {...props} roomId={roomId} userName={userName} />} />
			</div>
		</Router>
	);
}

export default App;
