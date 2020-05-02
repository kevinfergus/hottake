import React from 'react';

export default class TakeAnswer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ''
		};
	}
	async handleSubmit(e) {
		e.preventDefault();
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		console.log(this.state, 'take answer state');
		console.log('takeAnswer props', this.props);
		return (
			<div className="App-header">
				Give me your hottest take on {this.props.prompt}
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input type="text" name="answer" value={this.state.answer} onChange={(e) => this.handleChange(e)} />
				</form>
			</div>
		);
	}
}
