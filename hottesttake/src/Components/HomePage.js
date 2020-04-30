import React from 'react';
import WaitingRoom from './WaitingRoom';

class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			roomCode: '',
			roomInfo: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({ roomInfo: true });
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
					{!this.state.roomInfo ? (
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
					) : (
						<WaitingRoom />
					)}
				</header>
			</div>
		);
	}
}
export default HomePage;
