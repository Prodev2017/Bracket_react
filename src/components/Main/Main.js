import React from 'react';

import PageTitle from '../PageTitle';

import FontAwesome from 'react-fontawesome';


import './styles/Main.css';


const baseCssClassName = 'main';
const optionsCssClassName = `${baseCssClassName}__options`;
const optionCssClassName = `${baseCssClassName}__option`;


function Main () {
	return (
		<div className={baseCssClassName}>
			<PageTitle title={'Welcome to Skuchain Brackets'} />
			<div className={optionsCssClassName}>
				<div className={optionCssClassName}>
					<a href="/plans">
						<FontAwesome
							name='pencil-square'
							size='3x'
						/>
						<h3>Getting Started</h3>
					</a>
				</div>
				<div className={optionCssClassName}>
					<a href="/plans-new">
						<FontAwesome
							name='th'
							size='3x'
						/>
						<h3>Manage Existing Plans</h3>
					</a>
				</div>
				<div className={optionCssClassName}>
					<a href="/brackets">
						<FontAwesome
							name='sitemap'
							size='3x'
						/>
						<h3>Manage Existing Plans</h3>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Main;
