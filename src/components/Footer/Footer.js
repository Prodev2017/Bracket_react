import React from 'react';


import poweredByLogo  from './images/powered-by-skuchain.png';

import './styles/Footer.css'


const baseCssClassName = 'footer';


function Footer () {
	return (
		<div className={baseCssClassName}>

			<p>
				<img src={poweredByLogo} width={80} alt={'powered by'} />
			</p>
		</div>
	);
}


export default Footer;
