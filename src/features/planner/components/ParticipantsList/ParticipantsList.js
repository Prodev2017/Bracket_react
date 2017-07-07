import React from 'react';
import ParticipantItem from '../ParticipantItem';

import './styles/ParticipantsList.css';

const baseCssClassName = 'participants-list';


function ParticipantList (props) {
	return (
		<div className={baseCssClassName}>
			{props.participants.map((participant) =>
				<ParticipantItem
					key={participant.uuid}
					participant={participant}
					onSelect={props.onSelect}
					isSelected={participant.uuid === props.selectedId}
				/>
			)}
		</div>
	);
}

export default ParticipantList;
