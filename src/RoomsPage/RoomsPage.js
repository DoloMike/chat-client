import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './RoomsPage.css';

function RoomsPage() {
	const [ rooms, setRooms ] = useState([
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' },
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' },
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' },
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' },
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' },
		{ id: '1', roomName: 'Chat Room 1' },
		{ id: '2', roomName: 'Chat Room 2' },
		{ id: '3', roomName: 'Chat Room 3' }
	]);

	return (
		<div className="rooms-page">
			<div class="info">
				<span class="back">Edit</span>
				<p class="contact">Messages</p>
				<span class="details">
					<svg class="svg-icon" viewBox="0 0 705 550">
						<path
							d="M 625 275 L 625 525 Q 625 550 600 550 L 200 550 Q 175 550 175 525 L 175 125 Q 175 100 200 100 L 450 100"
							stroke-width="20"
							stroke="#4691f6"
							fill="none"
						/>
						<path
							d="M 325 400 L 330 335 L 642 15 Q 647 12 648 14 L 702 70 Q 704 72 702 73 L 390 390 L 325 400"
							stroke-linecap="round"
							stroke-width="20"
							stroke="#4691f6"
							fill="none"
						/>
						<path d="M 602 60 L 655 115" stroke-linecap="round" stroke-width="20" stroke="#4691f6" fill="none" />
					</svg>
				</span>
			</div>
			<div className="rooms-window">
				{rooms.map((r) => (
					<div className="room-tile">
						<Link to={`room/${r.id}`}>{r.roomName}</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default RoomsPage;
