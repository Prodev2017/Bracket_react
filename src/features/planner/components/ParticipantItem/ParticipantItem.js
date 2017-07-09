import React from 'react';
import classnames from 'classnames';


const baseCssClassName = 'participant';
const rulerCssClassName = `${baseCssClassName}__ruler`;


function ParticipantItem (props) {
	const {
		participant,
		currentRole,
		onSelect,
		isSelected,
	} = props;

	return (
		<div
			className={classnames([
				baseCssClassName,
				isSelected && `${baseCssClassName}__m-selected`,
			])}
		>
			<p onClick={() => onSelect && onSelect(participant)}>
				{currentRole === participant.role &&
					(
						<i className={`fa fa-user actor-icon is-${currentRole}`} />
					)
				}
				{participant.display_name}
			</p>
			<div className={rulerCssClassName} />
		</div>
	);
}

export default ParticipantItem;
