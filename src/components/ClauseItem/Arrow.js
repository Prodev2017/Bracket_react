import React from 'react';
import stateColors from '../../configs/stateColors';
import classnames from 'classnames';

import './styles/Arrow.css';


const defaultColor = '#B3B3B3';

const baseCssClassName = 'clause__arrow';


function Arrow (props) {
	const {
		direction,
		state,
	} = props;

	const stateColor = ( stateColors[state] || defaultColor );

	const leftArrow = (
		<svg width="9px" height="14px" viewBox="98 148 9 14" version="1.1">
			<g id="arrow-left" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(100.000000, 150.000000)" strokeLinecap="square">
				<path d="M0,4.94117647 L4.93330312,9.93251846" id="Line" strokeWidth="2" stroke={stateColor} />
				<path d="M4.93330312,0 L0,4.99134198" id="Line" strokeWidth="2" stroke={stateColor} />
			</g>
		</svg>
	)

	const rightArrow = (
		<svg width="9px" height="14px" viewBox="98 148 9 14" version="1.1">
			<g id="arrow-right" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(102.500000, 155.000000) rotate(180.000000) translate(-102.500000, -155.000000) translate(100.000000, 150.000000)" strokeLinecap="square">
				<path d="M0,4.94117647 L4.93330312,9.93251846" id="Line" strokeWidth="2" stroke={stateColor} />
				<path d="M4.93330312,0 L0,4.99134198" id="Line" strokeWidth="2" stroke={stateColor} />
			</g>
		</svg>
	);

	const arrow = ( direction === 'left' ? leftArrow : rightArrow );
	return (
		<div className={classnames([
			baseCssClassName,
			state && `${baseCssClassName}__m-${state}`,
		])}>
			{arrow}
		</div>
	);
}

export default Arrow;
