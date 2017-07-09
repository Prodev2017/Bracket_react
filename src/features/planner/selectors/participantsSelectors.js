const selectParticipants = (state) => state.planner.participants;

const selectParticipantsItems = (state) => selectParticipants(state).items;

const selectParticipantsIds = (state) => selectParticipants(state).ids;

const selectParticipantItem = (state, uuid) => selectParticipantsItems(state)[uuid];

const selectOrderedParticipantsItems = (state) => {
	const participantsItems = selectParticipantsItems(state);

	return selectParticipantsIds(state).map((uuid) => participantsItems[uuid]);
};


export default {
	selectParticipants,
	selectParticipantsItems,
	selectParticipantsIds,
	selectParticipantItem,
	selectOrderedParticipantsItems,
};
