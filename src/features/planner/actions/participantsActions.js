import storeUtils from '../../../appUtils/storeUtils';
import plannerUtils from '../utils/plannerUtils';
import participantActionTypes from './participantsActionTypes';
import participantSelectors from '../selectors/participantsSelectors';


function addParticipant () {
	return (dispatch) => {
		dispatch(storeUtils.makeAction(
			participantActionTypes.ACTION__ADD_PARTICIPANT,
			plannerUtils.createParticipant({
				uuid: storeUtils.createUUID(),
			})
		));
	};
}

function removeParticipant (options) {
	return (dispatch) => {
		dispatch(storeUtils.makeAction(participantActionTypes.ACTION__REMOVE_PARTICIPANT, {
			uuid: options.uuid,
		}));
	};
}

function updateAvenue (options) {
	return (dispatch, getState) => {
		const participant = participantSelectors.selectParticipantItem(getState(), options.uuid);

		dispatch(storeUtils.makeAction(participantActionTypes.ACTION__UPDATE_AVENUE, {
			uuid: options.uuid,
			data: {
				...participant,
				...options.data,
			},
		}));
	};
}

export default {
	addParticipant,
	removeParticipant,
	updateAvenue,
};
