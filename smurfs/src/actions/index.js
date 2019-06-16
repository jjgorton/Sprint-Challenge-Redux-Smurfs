import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'FETCH_START';
export const ADD_SUCCESS = 'FETCH_SUCCESS';
export const ADD_FAILURE = 'FETCH_FAILURE';

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCH_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log('then', res);
			dispatch({
				type    : FETCH_SUCCESS,
				payload : res.data
			});
		})
		.catch((err) => {
			console.log('error', err);
			dispatch({
				type    : FETCH_FAILURE,
				payload : err
			});
		});
};

export const newSmurf = (smurfObj) => (dispatch) => {
	dispatch({ type: ADD_START });
	axios
		.post('http://localhost:3333/smurfs', smurfObj)
		.then((res) => {
			console.log('add Then', res);
			dispatch({
				type    : ADD_SUCCESS,
				payload : res.data
			});
		})
		.catch((err) => {
			console.log('add Error', err);
			dispatch({
				type    : ADD_FAILURE,
				payload : err
			});
		});
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
