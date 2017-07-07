import activeEntityActionTypes from '../actions/activeEntityActionTypes';


const initialState = {
	type: null,
	id: null,
};


export default function activeEntityReducer (state = initialState, action) {
	switch (action.type) {
		case activeEntityActionTypes.ACTION__SET_ENTITY:
			return {
				...state,
				type: action.payload.type,
				id: action.payload.id,
			};

		case activeEntityActionTypes.ACTION__RESET_ENTITY:
			return {
				...state,
				type: null,
				id: null,
			};
		
		case activeEntityActionTypes.ACTION__SET_TYPE:
			return {
				...state,
				type: action.payload,
			};

		case activeEntityActionTypes.ACTION__RESET_TYPE:
			return {
				...state,
				type: null,
			};

		case activeEntityActionTypes.ACTION__SET_ID:
			return {
				...state,
				id: action.payload,
			};

		case activeEntityActionTypes.ACTION__RESET_ID:
			return {
				...state,
				id: null,
			};

		default:
			return state;
	}
} 
