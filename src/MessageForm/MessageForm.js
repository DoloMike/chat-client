import React, { useState } from 'react';
import { ChatAPI } from '../utils/api';
import './MessageForm.css';

function MessageForm(props) {
	const [ newMessage, setNewMessage ] = useState('');

	// on form submission, send the msg object to api call and clear the form
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newMessage) return;
		const msg = {
			content: newMessage,
			author: props.userName,
			createdAt: new Date().toISOString()
		};
		ChatAPI.sendNewMessage(props.roomId, msg);
		setNewMessage('');
	};

	return (
		<form className="message-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Your message"
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
			/>
			<input type="submit" value="Send" />
		</form>
	);
}

export default MessageForm;
