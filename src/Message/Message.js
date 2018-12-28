import React from 'react';
import './Message.css';

function Message(props) {
	const messageClassName = props.fromThem ? 'fromThem' : 'myMessage';

	return (
		<div className="message">
			<div className={messageClassName}>
				<p> {props.content} </p>
				<div className="date">
					<b> {props.author} </b> {props.createdAt}
				</div>
			</div>
		</div>
	);
}

export default Message;
