import React from 'react';
import {
	ControlLabel,
} from 'react-bootstrap';


function HelpView ()  {
	return (
		<div className='container-fluid' style={{ paddingTop: '1em' }}>
			<ControlLabel>How is the cash to cash period calculated?</ControlLabel>
			<p>
				We calculate cash to cash based on the bracket flow. Using the 'Bracket' tab, you can plan out the expected lead time between each clause. To change this lead time, highlight a clause by clicking on it, and in the editor window on the right-hand side of the screen, edit the 'Date' field. Each clause can come any number of days after any clause before it.
			</p>
			<br />
			<ControlLabel>How is LIBOR calculated?</ControlLabel>
			<p>
				We compute LIBOR (London Interbank Offered Rate) based on information from <a href='http://www.bankrate.com/rates/interest-rates/libor.aspx'>bankrate.com</a>.
			</p>
		</div>
	);
}

export default HelpView;
