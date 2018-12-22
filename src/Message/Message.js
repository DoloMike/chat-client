import React, { useState } from 'react';
import './Message.css';

function Message(props) {
	const messageClassName = props.fromThem ? 'fromThem' : 'myMessage';

	return (
		<div className="message">
			<div className={messageClassName}>
				<p>{props.content}</p>
				<date>
					<b>{props.author}</b> {props.createdAt}
				</date>
			</div>
		</div>
	);
}

export default Message;
