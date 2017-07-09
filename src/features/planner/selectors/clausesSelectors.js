const selectClauses = (state) => state.planner.clauses;

const selectClausesItems = (state) => selectClauses(state).items;

const selectClausesIds = (state) => selectClauses(state).ids;

const selectClauseItem = (state, uuid) => selectClausesItems(state)[uuid];

const selectOrderedClausesItems = (state) => {
	const participantsItems = selectClausesItems(state);

	return selectClausesIds(state).map((uuid) => participantsItems[uuid]);
};

const selectVisibleClauses = (state) => selectOrderedClausesItems(state);


export default {
	selectClauses,
	selectClausesItems,
	selectClausesIds,
	selectClauseItem,
	selectOrderedClausesItems,
	selectVisibleClauses,
};
