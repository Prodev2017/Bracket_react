import React from 'react';


function Pulse () {
	return (
		<div
			className={'row-icon'}
			style={{ position: 'absolute', top: '50%', right: '-20%', fontSize: '1.75em' }}
		>
			<i className='fa fa-exclamation-circle pulse-marker'>
				<div className='pulse-rays' style={{ top: '-12px', right: '-22px' }}/>
			</i>
		</div>
	);
}

export default Pulse;
