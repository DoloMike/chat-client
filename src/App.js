import React, { useState } from 'react';
import Message from './Message/Message';
import './App.css';

function App() {
	return (
		<div className="app">
			<div className="border">
				<div className="responsive-html5-chat">
					<form className="chat">
						<span />
						<div className="messages">
							<Message
								fromThem={false}
								content={'It looks beautiful!'}
								author={'Kate'}
								createdAt={'08.03.2017 14:30:7'}
							/>
							<Message
								fromThem={true}
								content={'It looks like the iPhone message box.'}
								author={'John Doe'}
								createdAt={'08.03.2016 14:31:22'}
							/>
							<div className="message">
								<div className="myMessage">
									<p>Yep, is this design responsive?</p>
									<date>
										<b>Kate</b> 08.03.2016 14:33:32
									</date>
								</div>
							</div>
							<div className="message">
								<div className="myMessage">
									<p>By the way when I hover on my message it shows date.</p>
									<date>
										<b>Kate</b> 08.03.2016 14:36:4
									</date>
								</div>
							</div>
							<div className="message">
								<div className="fromThem">
									<p>Yes, this is completely responsive.</p>
									<date>
										<b>John Doe</b> 08.03.2016 14:37:12
									</date>
								</div>
							</div>
							<div className="message">
								<div className="myMessage">
									<p>It looks beautiful!</p>
									<date>
										<b>Kate</b> 08.03.2017 14:30:7
									</date>
								</div>
							</div>
							<div className="message">
								<div className="fromThem">
									<p>It looks like the iPhone message box.</p>
									<date>
										<b>John Doe</b> 08.03.2016 14:31:22
									</date>
								</div>
							</div>
							<div className="message">
								<div className="myMessage">
									<p>Yep, is this design responsive?</p>
									<date>
										<b>Kate</b> 08.03.2016 14:33:32
									</date>
								</div>
							</div>
							<div className="message">
								<div className="myMessage">
									<p>By the way when I hover on my message it shows date.</p>
									<date>
										<b>Kate</b> 08.03.2016 14:36:4
									</date>
								</div>
							</div>
						</div>
						<input type="text" placeholder="Your message" />
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
