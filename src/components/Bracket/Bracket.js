import React from 'react';

import './styles/Bracket.css';

const baseCssClassName = 'bracket';
const contentCssClassName = `${baseCssClassName}__content`;


function Bracket (props) {
	return (
		<div className={baseCssClassName}>
			<div className={contentCssClassName}>
				{props.children}
			</div>
		</div>
	);
}


export default Bracket;
