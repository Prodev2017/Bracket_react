import userActionTypes from '../actions/userActionTypes';


const initialState = {
	isAuthenticated: false,
	data: {},
};

export default function userReducer (state = initialState, action) {
	switch (action.type) {
		case userActionTypes.ACTION__LOG_IN:
			return {
				...state,
				isAuthenticated: true,
				data: action.payload.data,
			};

		case userActionTypes.ACTION__LOG_OUT:
			return {
				...state,
				isAuthenticated: false,
				data: {},
			};

		default:
			return state;
	}
}
