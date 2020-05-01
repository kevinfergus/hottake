import React from 'react';
import * as firebase from 'firebase';
import PlayerControls from './PlayerControls';
import { db } from '../../firebase';

class JoinRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			roomCode: '',
			roomInfo: false,
			test: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async componentDidMount() {
		try {
			let test = [];
			db.ref('prompts').on('value', (snapshot) => {
				snapshot.forEach((snap) => {
					test.push(snap.val());
				});
			});
			this.setState({ test });
		} catch (error) {
			console.log(error);
		}
	}
	async handleSubmit(e) {
		e.preventDefault();

		try {
			await db.ref(`games/${this.state.roomCode}/state/players`).update({
				[this.state.name]: { name: this.state.name, score: 0 }
			});
		} catch (error) {
			console.log(error);
		}
		this.setState({ roomInfo: true });
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		console.log(this.state.roomCode);
		const newTestKey = db.ref().child('games').push().key;
		console.log('new test key', newTestKey);
		return (
			<div className="WaitingRoom">
				<header className="App-header">
					{!this.state.roomInfo ? (
						<div>
							Join a room:
							<form onSubmit={this.handleSubmit}>
								<label>
									Name:
									<input
										type="text"
										name="name"
										value={this.state.name}
										onChange={this.handleChange}
									/>
								</label>
								<label>
									Room Code:
									<input
										type="text"
										name="roomCode"
										value={this.state.roomCode}
										onChange={this.handleChange}
									/>
								</label>
								<input type="submit" value="Join" />
							</form>
						</div>
					) : (
						<PlayerControls home={this.props.home} />
					)}
				</header>
			</div>
		);
	}
}
export default JoinRoom;
