import clausesActionTypes from '../actions/clausesActiionTypes';


export default function clausesReducer (state = {}, action) {
	switch (action.type) {
		case clausesActionTypes.ACTION__UPDATE_CLAUSE:
			return {
				...state,
				items: {
					...state.items,
					[action.payload.uuid]: action.payload.data,
				},
			};
		
		default:
			return state;
	}
}
