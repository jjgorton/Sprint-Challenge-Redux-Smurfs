import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_START, ADD_SUCCESS, ADD_FAILURE } from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
	smurfs         : [],
	fetchingSmurfs : false,
	addingSmurf    : false,
	updatingSmurf  : false,
	deletingSmurf  : false,
	error          : null
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				fetchingSmurfs : true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				fetchingSmurfs : false,
				smurfs         : action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				fetchingSmurfs : false,
				error          : action.payload
			};
		case ADD_START:
			return {
				...state,
				addingSmurf : true
			};
		case ADD_SUCCESS:
			return {
				...state,
				addingSmurf : false,
				smurfs      : state.smurfs.push(action.payload)
			};
		case ADD_FAILURE:
			return {
				...state,
				addingSmurf : false,
				error       : action.payload
			};
		default:
			return state;
	}
}

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
