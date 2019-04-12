import React from 'react';
import { connect } from 'react-redux';

import { newSmurf } from '../actions';

class AddForm extends React.Component {
	state = {
		name   : '',
		age    : '',
		height : ''
	};

	addSmurf = (e) => {
		e.preventDefault();
		this.props.newSmurf(this.state);
		this.setState({
			name   : '',
			age    : 0,
			height : 0
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={this.addSmurf}>
					<input
						type="text"
						name="name"
						placeholder="Smurf Name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<input
						type="number"
						name="age"
						placeholder="Smurf Age"
						value={this.state.age}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="height"
						placeholder="Smurf Height"
						value={this.state.height}
						onChange={this.handleChange}
					/>
					<button>Add Smurf</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		smurfs : state.smurfs,
		error  : state.error
	};
};

export default connect(mapStateToProps, { newSmurf })(AddForm);
