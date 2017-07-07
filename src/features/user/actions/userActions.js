import storeUtils from '../../../appUtils/storeUtils';
import userActionTypes from './userActionTypes';


function logIn (options) {
	return (dispatch) => {
		dispatch(storeUtils.makeAction(userActionTypes.ACTION__LOG_IN, {
			data: {
				username: options.username,
			},
		}));
	}
}

export default {
	logIn,
};
