import { combineReducers } from 'redux';

import participantsReducer from './participantsReducer';
import clausesReducer from './clausesReducer';
import activeEntityReducer from'./activeEntityReducer';

export default combineReducers({
	participants: participantsReducer,
	clauses: clausesReducer,
	activeEntity: activeEntityReducer,
})
