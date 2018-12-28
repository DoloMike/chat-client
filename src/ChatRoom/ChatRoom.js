import React, { useState, useEffect } from 'react';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';
import { ChatAPI } from '../utils/api';
import './ChatRoom.css';

function ChatRoom(props) {
	const [ messages, setMessages ] = useState([]);

	const formatLocaleDate = (dt) => {
		//ex.) 12/27/2018, 6:43 PM

		const dateFormat = {
			month: 'numeric',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
		return new Date(dt).toLocaleTimeString('en-US', dateFormat);
	};

	// load previous messages only when messages === []
	useEffect(() => {
		return ChatAPI.loadOldMessages((msgs) => {
			setMessages(
				msgs.map((m) => {
					m.fromThem = m.author !== props.userName ? true : false;
					m.createdAt = formatLocaleDate(m.createdAt);
					return m;
				})
			);
		});
	}, []);

	// listen for new messages
	useEffect(() => {
		ChatAPI.subscribeToNewMessages((msg) => {
			msg.fromThem = msg.author !== props.userName ? true : false;
			msg.createdAt = formatLocaleDate(msg.createdAt);
			messages.push(msg);
			setMessages(messages);
		});
		return ChatAPI.unsubscribeFromNewMessages;
	});

	return (
		<div className="chat-room">
			<div className="message-window">
				{messages.map((msg, idx) => (
					<Message
						key={idx}
						fromThem={msg.fromThem}
						content={msg.content}
						author={msg.author}
						createdAt={msg.createdAt}
					/>
				))}
			</div>

			<MessageForm userName={props.userName} roomId={props.roomId} />
		</div>
	);
}

export default ChatRoom;
