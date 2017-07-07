import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Bracket from '../../../../components/Bracket';
import ClauseList from '../../../../components/ClausesList';
import ParticipantList from '../ParticipantsList';

import participantsSelectors from '../../../../features/planner/selectors/participantsSelectors';
import clausesSelectors from '../../../../features/planner/selectors/clausesSelectors';
import activeEntitySelectors from '../../../../features/planner/selectors/activeEntitySelectors';

import activeEntityActions from '../../../../features/planner/actions/activeEntityActions';

import entities from '../../configs/enitites';

class BracketContainer extends PureComponent {
	componentWillUnmount () {
		this.props.onResetEntity();
	}

	_handleParticipantSelect = (participant) => {
		this.props.onSetEntity({
			type: entities.ENTITY_PARTICIPANT,
			id: participant.uuid,
		});
	}

	_handleClauseSelect = (clause) => {
		this.props.onSetEntity({
			type: entities.ENTITY_CLAUSE,
			id: clause.uuid,
		});
	}

	render () {
		const {
			participants,
			participantIds,
			clauses,
			activeEntity,
		} = this.props;

		return (
			<Bracket>
				<ParticipantList
					participants={participants}
					selectedId={activeEntity.type === entities.ENTITY_PARTICIPANT && activeEntity.id}
					onSelect={this._handleParticipantSelect}
				/>
				<ClauseList
					clauses={clauses}
					participantIds={participantIds}
					onSelect={this._handleClauseSelect}
					selectedId={activeEntity.type === entities.ENTITY_CLAUSE && activeEntity.id}
				/>
			</Bracket>
		);
	}
}

export default connect((state) => ({
	participants: participantsSelectors.selectOrderedParticipantsItems(state),
	participantIds: participantsSelectors.selectParticipantsIds(state),
	clauses: clausesSelectors.selectVisibleClauses(state),
	activeEntity: activeEntitySelectors.selectActiveEntity(state),
}), (dispatch) => ({
	onSetEntity: (entity) => dispatch(activeEntityActions.setEntity({
		entity,
	})),
	onResetEntity: () => dispatch(activeEntityActions.resetEntity()),
}))(BracketContainer);
