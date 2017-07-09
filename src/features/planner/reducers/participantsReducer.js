import participantsActionTypes from '../actions/participantsActionTypes';


const initialState = {
	items: {},
	ids: [],
};


export default function participantsReducer (state = initialState, action) {
	switch (action.type) {
		case participantsActionTypes.ACTION__ADD_PARTICIPANT:
			return {
				...state,

				items: {
					...state.items,
					[action.uuid]: action.data,
				},

				ids: state.ids.concat([ action.uuid ]),
			};

		case participantsActionTypes.ACTION__REMOVE_PARTICIPANT: {
			const newState = {
				...state,
				items: {
					...state.items,
				},
				ids: state.ids.filter((uuid) => ( uuid !== action.uuid )),
			};
			delete newState[action.uiid];

			return newState;
		}

		case participantsActionTypes.ACTION__REQUEST_TRADE_SUCCESS:
			return {
				...state,
				items: {
					...state.items,
					...action.template.participants.entities,
				},
				ids: state.items.concat(action.template.participants.results),
			};

		case participantsActionTypes.ACTION__UPDATE_AVENUE:
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
