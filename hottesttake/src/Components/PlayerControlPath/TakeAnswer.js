import React from 'react';

export default class TakeAnswer extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ''
		};
	}
	async handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="App-header">
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="answer" value={this.state.answer} onChange={this.handleChange} />
				</form>
				Give me your hottest take on prompt
			</div>
		);
	}
}
