import React from 'react';
import { db } from '../../firebase';

class GameRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			status: '',
			pairs: []
		};
	}
	async componentDidMount() {
		try {
			db.ref(`games/${this.props.code}/state/status`).on('value', (snapshot) => {
				this.setState({ status: snapshot.val() });
			});
		} catch (error) {
			console.log(error);
		}
		let pairs = [];

		let pairObj = {};

		for (let i = 0; i < this.props.players.length; i++) {
			if (i % 2 === 0) {
				pairObj.player1 = this.props.players[i];
			} else {
				pairObj.player2 = this.props.players[i];
				pairs.push(pairObj);
				pairObj = {};
			}
		}
		///loop through the pair object, do a .child type of thing to set it with "players"
	}
	render() {
		console.log('state in game room', this.state);
		if (this.state.status === '') {
			return <div className="App-header">Loading</div>;
		} else if (this.state.status === 'answering') {
			return <div className="App-header">Look at your player controls for directions</div>;
		}
	}
}

export default GameRoom;
