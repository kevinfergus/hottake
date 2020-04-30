import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WaitingRoom from './WaitingRoom';
import './App.css';
const App = () => {
	return (
		<Router>
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>HOT TAKE</p> <WaitingRoom />
				</header>
				<Switch>
					/>
					<Route path="/waitingRoom" component={() => <div />} />
				</Switch>
			</div>
		</Router>
	);
};
class WaitingRoom extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			roomCode: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push('/gameRoom');
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div className="WaitingRoom">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>HOT TAKE</p>
					<form onSubmit={this.handleSubmit}>
						<label>
							Name:
							<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
						</label>
						<label>
							Room Code:
							<input
								type="text"
								name="roomCode"
								value={this.state.roomCode}
								onChange={this.handleChange}
							/>
						</label>
						<input type="submit" value="Join" />
					</form>
				</header>
			</div>
		);
	}
}

export default App;
