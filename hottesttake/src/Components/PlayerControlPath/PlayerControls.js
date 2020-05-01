import React, { useState } from 'react';
import { db } from '../../firebase';

class PlayerControls extends React.Component {
	constructor() {
		super();
		this.state = {
			status: ''
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
				this.setState({ status: game.status });
			});
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		if (this.state.status === 'waitingRoom') {
			return <div>You're all sit, hang out till everyone joins</div>;
		} else {
			return <div>Let's get going!</div>;
		}
	}
}
export default PlayerControls;
