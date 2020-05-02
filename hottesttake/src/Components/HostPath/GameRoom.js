import React from 'react';
import { db } from '../../firebase';

class GameRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			prompts: [],
			status: ''
		};
	}
	async componentDidMount() {
		///I want to get the prompts, make them the prompts on the game object in fire base, then tie
		///that to the state in this component
		try {
			db.ref(`games/${this.props.code}/state/status`).on('value', (snapshot) => {
				this.setState({ status: snapshot.val() });
			});
		} catch (error) {
			console.log(error);
		}
		// for(let i = 0; i <this.props.players.length; i ++) {
		// 	this.
		// }
	}
	render() {
		if (this.state.status === '') {
			return <div className="App-header">Loading</div>;
		} else if (this.state.status === 'answering') {
			return <div className="App-header">Look at your player controls for directions</div>;
		}
	}
}

export default GameRoom;
