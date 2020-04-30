import React, { useEffect } from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import firebase from 'firebase';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JoinRoom from './Components/JoinRoom';
import WaitingRoom from './Components/WaitingRoom';
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

const db = fire.database();
let prompts;

fire.database().ref('prompts').once('value').then((snapshot) => {
	prompts = snapshot.val();
});

const App = () => {
	const [ prompt, loading, error ] = useObjectVal(db.ref('prompts'));
	if (loading) return 'loading';
	if (error) return 'error”';
	console.log('prompts', prompt);
	// useEffect(() => {
	// 	fire.database().ref('prompts').set({
	// 		test: 'testing'
	// 	});
	// }, []);

	return (
		<Router>
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>HOT TAKE</p>{' '}
					<div>
						Start a game <JoinRoom />
					</div>
				</header>
				<Switch>
					/>
					<Route path="/waitingRoom" component={WaitingRoom} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
