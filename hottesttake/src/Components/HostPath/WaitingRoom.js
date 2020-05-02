import React from 'react';
import GameRoom from './GameRoom';
import { db } from '../../firebase';

class WaitingRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			allPlayers: false,
			players: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		try {
			db.ref(`games/${this.props.code}/state/players`).on('value', (snapshot) => {
				let players = [];
				snapshot.forEach((snap) => {
					players.push(snap.val());
				});
				this.setState({ players });
			});
		} catch (error) {
			console.log(error);
		}
	}
	async handleSubmit(e) {
		e.preventDefault();
		try {
			db.ref(`games/${this.props.code}/state/`).update({ status: 'answering' });
			this.setState({ allPlayers: true });
		} catch (error) {
			console.log(error);
		}
		this.setState({ allPlayers: true });
	}
	render() {
		return (
			<div>
				{!this.state.allPlayers ? (
					<div className="App-header">
						This is your code: {this.props.code}. When all the players have joined, press the button!
						<input type="submit" value="Everyones in!" onClick={(e) => this.handleSubmit(e)} />
						Players:<div className="players">
							{this.state.players.map((player) => {
								return <div key={player.name}>{player.name}</div>;
							})}
						</div>
					</div>
				) : (
					<GameRoom players={this.state.players} code={this.props.code} />
				)}
			</div>
		);
	}
}

export default WaitingRoom;
