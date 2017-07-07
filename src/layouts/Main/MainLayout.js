import React from 'react';


import Header from '../../components/Header';
import Footer  from '../../components/Footer';

import './styles/MainLayout.css';


const baseCssClassName = 'main-layout';
const contentCssClassName = `${baseCssClassName}__content`;


function MainLayout (props) {
	return (
		<div className={baseCssClassName}>
			<Header />
			<div className={`${contentCssClassName} container-fluid panel panel-default`}>
				{props.children}
			</div>
			<Footer />
		</div>
	);
}

export default MainLayout;

