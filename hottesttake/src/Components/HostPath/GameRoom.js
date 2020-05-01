import React from 'react';
import { db } from '../../firebase';

class GameRoom extends React.Component {
	constructor() {
		super();
	}
	async componentDidMount() {
		try {
			db.ref('games').on('value', (snapshot) => {
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
	render() {
		console.log('state', this.state);
		return <div className="App-header">Game Room, we will play a game</div>;
	}
}

export default GameRoom;
