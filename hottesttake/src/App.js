import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import WaitingRoom from './Components/WaitingRoom';
import './App.css';
const App = () => {
	return (
		<Router>
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>HOT TAKE</p> <HomePage />
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
