import React, { useState } from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JoinRoom from './Components/PlayerControlPath/JoinRoom';
import WaitingRoom from './Components/HostPath/WaitingRoom';
import GameRoom from './Components/HostPath/GameRoom';
import * as firebase from 'firebase';
import './App.css';
const config = {
	apiKey: 'AIzaSyDx900bEhFzPhnKIUnHUyy-TaWRQnNPu04',
	authDomain: 'hottake-85bb4.firebaseapp.com',
	databaseURL: 'https://hottake-85bb4.firebaseio.com',
	projectId: 'hottake-85bb4',
	storageBucket: 'hottake-85bb4.appspot.com',
	messagingSenderId: '515581184089',
	appId: '1:515581184089:web:060c709ceab01b4577c948',
	measurementId: 'G-7SXTTFVT1Z'
};

const fire = firebase.initializeApp(config);

// const db = fire.database();
// let prompts;

// fire.database().ref('prompts').once('value').then((snapshot) => {
// 	prompts = snapshot.val();
// });
// const [ prompt, loading, error ] = useObjectVal(db.ref('prompts'));
// const [ started, setStarted ] = useState(false);
// const [ home, setHome ] = useState(false);
// if (loading) return 'loading';
// if (error) return 'error”';

class App extends React.Component {
	// const [ prompt, loading, error ] = useObjectVal(db.ref('prompts'));
	// const [ started, setStarted ] = useState(false);
	// const [ home, setHome ] = useState(false);
	// if (loading) return 'loading';
	// if (error) return 'error”';
	constructor() {
		super();
		this.state = {
			started: false,
			home: true
		};
		this.handleHome = this.handleHome.bind(this);
	}
	handleClick() {
		this.setState({ started: true });
	}
	handleHome() {
		this.setState({ home: false });
	}

	render() {
		return (
			<div>
				{!this.state.started && this.state.home ? (
					<div>
						{' '}
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>HOT TAKE</p>
							<p>
								Start a game:{' '}
								<input type="submit" value="New game" onClick={(e) => this.handleClick(e)} />
								<JoinRoom handleHome={this.handleHome} />
							</p>
						</header>
					</div>
				) : (
					<div>
						{' '}
						<GameRoom />
					</div>
				)}
			</div>
		);
	}
}

export default App;
