import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateClause, addDocument, removeDocument } from '../../../../actions';
// import { Row, Col } from 'react-bootstrap';
//
// import PaymentInput from './payment-input';
// import DocumentsInput from './documents-input';
// import DateInput from './date-input';

// import { getClause, getClauses } from '../../../../reducers/clauses';
// import { getParticipants } from '../../../../reducers/participants';

import clausesActions from '../../../actions/clausesActions';


class PlanForm extends Component {
	_handleChangePlan = (event) => {
		const {
			onChange,
			clause,
		} = this.props;

		if ( onChange ) {
			const propName = event.target.name;

			onChange({
				...clause,
				[propName]: event.target.value,
			});
		}
	}
	
	render () {
		const participants = this.props.participants;
		const {
			label,
			by,
			to,
			type,
			payment,
			documents,
			date,
		} = this.props.clause;

		return (
			<div className='step-attributes edit-form'>
				<table className='attributes-table table-condensed table-bordered'>
					<tbody>
					<tr>
						<td>Name</td>
						<td>
							<input
								className={'form-control street-input'}
								name={'label'}
								value={label}
								onChange={this._handleChangePlan}
							/>
						</td>
					</tr>
					<tr>
						<td>From</td>
						<td>
							<select
								name={'by'}
								className={'form-control street-input'}
								value={by}
								onChange={this._handleChangePlan}
							>
								<option value={''} disabled>Select an avenue</option>
								{participants.map(({ display_name, uuid }) => (
									<option
										key={uuid}
										value={uuid}
									>
										{display_name}
									</option>
								))}
							</select>
						</td>
					</tr>
					<tr>
						<td>To</td>
						<td>
							<select
								name={'to'}
								className={'form-control street-input'}
								value={to}
								onChange={this._handleChangePlan}
							>
								<option value={''} disabled>Select an avenue</option>
								{participants.map(({ display_name, uuid }) => (
									<option
										key={uuid}
										value={uuid}
									>
										{display_name}
									</option>
								))}
							</select>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(null, (dispatch) => ({
	onChange: (clause) => dispatch(clausesActions.updateClause({
		uuid: clause.uuid,
		data: clause,
	})),
}))(PlanForm);
