import React from 'react';

import logoImg from './images/logo.png';
import './styles/Header.css';

"Crowdbotics"
const baseCssClassName = 'header';
const logoContainerCssClassName = `${baseCssClassName}__logo-container`;
const logoCssClassName = `${baseCssClassName}__logo`;


function Header () {
	return (
		<div className={baseCssClassName}>
			<a href={'/'} className={logoContainerCssClassName}>
				<img src={logoImg} className={logoCssClassName} alt={'logo'} />
			</a>
		</div>
	);
}

export default Header;