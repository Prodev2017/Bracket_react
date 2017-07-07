import React from 'react';
import ClauseItem from '../ClauseItem';


import './styles/ClausesList.css';


const baseCssClassName = 'clauses-list';


function ClausesList (props) {
	const {
		clauses,
		participantIds,
		participantRoles,
		onSelect,
		selectedId,
		tradeIds=[],
		actions,
	} = props;

	const participants = ( participantIds || participantRoles );

	return (
		<div className={baseCssClassName}>
			{clauses.map((clause) => {
				return (
					<ClauseItem
						key={clause.uuid}
						clause={clause}
						start={participants.indexOf(clause.by)}
						end={participants.indexOf(clause.to)}
						total={participants.length}
						tradeIndex={( tradeIds && tradeIds.indexOf(clause.tradeId) )}
						onSelect={onSelect}
						isSelected={( clause.uuid === selectedId )}
						isCurrentStep={false}
						actions={actions}
					/>
				);
			})}
		</div>
	);
}

export default ClausesList;
