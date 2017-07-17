import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle';
import './styles/PageTitle.css';


const baseCssClassName = 'page-title';


const propTypes = {
	title: PropTypes.node.isRequired,
};


function PageTitle (props) {
	return (
		<div className={baseCssClassName}>
			<h2>{props.title}</h2>
		</div>
	);
}

PageTitle.propTypes = propTypes;

export default PageTitle;