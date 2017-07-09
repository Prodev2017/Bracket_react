import storeUtils from '../../../appUtils/storeUtils';
import clausesActionTypes from './clausesActiionTypes';
import clausesSelectors from '../selectors/clausesSelectors';


function updateClause (options) {
	return (dispatch, getState) => {
		const clause = clausesSelectors.selectClauseItem(getState(), options.uuid);
		
		dispatch(storeUtils.makeAction(clausesActionTypes.ACTION__UPDATE_CLAUSE, {
			uuid: options.uuid,
			data: {
				...clause,
				...options.data,
			},
		}));
	};
}

export default {
	updateClause,
};
