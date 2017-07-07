import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow';
import Pulse from './Pulse';
import classnames from 'classnames';

import eventLabelMappings from '../../configs/eventLabelMappings';

import './styles/ClauseItem.css';


const baseCssClassName = 'clause-item';
const rowCssClassName = `${baseCssClassName}__row`;


class ClauseItem extends PureComponent {
	render() {
		const {
			clause,
			start,
			end,
			total,
			onSelect,
			isSelected,
			isCurrentStep,
			bracket
		} = this.props;

		const min = Math.min(start, end);
		const max = Math.max(start, end);
		const direction = ( start < end ? 'right' : 'left' );

		let clauseState = clause.state;

		if ( isCurrentStep ) {
			clauseState = ( clause.by === bracket.get('currentRole') ? 'active' : 'pending' );
		}

		const clauseLabel = (
			eventLabelMappings[clause.label] && 
			eventLabelMappings[clause.label][clauseState]
		)
			? eventLabelMappings[clause.label][clauseState]
			: clause.label;

		const style = {
			container: {
				width: `calc(100% * ( (${max - min} * 2) / (${total} * 2) ))`,
				marginLeft: `calc(100% * ( ( (${min} * 2) + 1) / (${total} * 2) ))`,
				opacity: clauseState === 'incomplete' && 0.7
			},
			content: {
				width: `calc(100% * ( 1 / ${max - min} ))`,
				fontSize: '0.8em',
				fontStyle: clauseState === 'incomplete' && 'italic',
				float: direction === 'left' && 'right'
			}
		};

		const clauseClasses = classnames([
			baseCssClassName,
			'clearfix',
			`${baseCssClassName}__m-direction-${direction}`,
			isSelected && `${baseCssClassName}__m-selected`,
		]);

		return (
			<div className={rowCssClassName}>
				<div
					className={clauseClasses}
					style={style.container}
					onClick={() => onSelect && onSelect(clause)}
				>
					<p style={style.content}>
						{clauseLabel}
					</p>
					<Arrow direction={direction} state={clauseState} />
					{clauseState === 'active' && <Pulse />}
				</div>
			</div>
		);
	}
}

export default connect((state) => ({
	bracket: state.bracket
}))(ClauseItem);
