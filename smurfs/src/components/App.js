import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs } from '../actions';

import SmurfList from './SmurfList';
import AddForm from './AddForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div className="App">
				<h1>Smurf Village</h1>
				<div className="container">
					<SmurfList smurfs={this.props.smurfs} />
					<AddForm />
				</div>
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

export default connect(mapStateToProps, { getSmurfs })(App);
