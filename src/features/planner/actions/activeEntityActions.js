import storeUtils from '../../../appUtils/storeUtils';
import activeEntityActionTypes from './activeEntityActionTypes';


function setEntity (options) {
	return (dispatch) => {
		dispatch(storeUtils.makeAction(activeEntityActionTypes.ACTION__SET_ENTITY, {
			type: options.entity.type,
				id: options.entity.id,
		}));
	};
}

function resetEntity () {
	return (dispatch) => {
		dispatch(storeUtils.makeAction(activeEntityActionTypes.ACTION__RESET_ENTITY));
	};
}

export default {
	setEntity,
	resetEntity,
};
