import React from 'react';
import GameRoom from './GameRoom';

class WaitingRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			allPlayers: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({ allPlayers: true });
	}
	render() {
		return (
			<div>
				{!this.state.allPlayers ? (
					<div>
						When all the players have joined, press the button!
						<input type="submit" value="Everyones in!" onClick={(e) => this.handleSubmit(e)} />
					</div>
				) : (
					<GameRoom />
				)}
			</div>
		);
	}
}

export default WaitingRoom;
