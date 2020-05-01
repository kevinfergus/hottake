import React, { useState } from 'react';
import { db } from '../../firebase';

class PlayerControls extends React.Component {
	constructor() {
		super();
		this.state = {
			game: {}
		};
	}

	async componentDidMount() {
		try {
			db.ref(`games/${this.props.code}`).on('value', (snapshot) => {
				let game = [];
				snapshot.forEach((snap) => {
					game.push(snap.val());
				});
				game = game[0];
				this.setState({ game });
			});
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		console.log('game', this.state.game);
		return <div className="App-header">These are your player controls, hang out till the game starts</div>;
	}
}
export default PlayerControls;
