import React, { Component } from 'react';
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';

import {
	ButtonGroup,
	Button,
} from 'react-bootstrap';

// import { getParticipant } from "../../../reducers/participants";
// import {
// 	getClausesForParticipant,
// 	getClausesForTrade
// } from "../../../reducers/clauses";
// import { getTradesForParticipant } from "../../../reducers/trades";

import roles from '../../configs/participantRoles';

import participantsActions from '../../actions/participantsActions';
import participantsSelectors from '../../selectors/participantsSelectors';


const baseCssClassName = 'edit-container';
const contentCssClassName = `${baseCssClassName}__content`;



class ParticipantEditor extends Component {
	_handleChange = (event) => {
		const {
			onChange,
			participant,
		} = this.props;

		if ( onChange ) {
			const propName = event.target.name;

			onChange({
				...participant,
				[propName]: event.target.value,
			});
		}
	}

	_handleRemove = () => {
		const {
			onRemove,
		} = this.props;

		if (onRemove) {
			onRemove();
		}
	}

	render () {
		const {
			userId,
			displayName,
			role,
			email,
		} = this.props.participant;

		return (
			<div>
				<div className={baseCssClassName}>
					<div className={contentCssClassName}>
						<table className={'table-hover attributes-table table-condensed table-bordered'}>
							<tbody>
							<tr>
								<td>User ID</td>
								<td>
									<input
										className={'form-control street-input'}
										name={'userId'}
										value={( userId || '') }
										onChange={this._handleChange}
										placeholder={'Username'}
									/>
								</td>
							</tr>
							<tr>
								<td>Display Name</td>
								<td>
									<input
										className={'form-control street-input'}
										name={'displayName'}
										value={( displayName || '') }
										onChange={this._handleChange}
										placeholder={'Display Name'}
									/>
								</td>
							</tr>
							<tr>
								<td>Role</td>
								<td>
									<select
										className={'form-control street-input'}
										name={'role'}
										value={( role || '' )}
										onChange={this._handleChange}
									>
										<option value='' disabled>Select a role</option>
										{roles.map(roleName => (
											<option
												key={roleName}
												value={roleName}
											>
												{roleName}
											</option>
										))}
									</select>
								</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>
									<input
										className={'form-control street-input'}
										name={'email'}
										value={( email || '' )}
										onChange={this._handleChange}
										placeholder='Email Address'
									/>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				<ButtonGroup>
					<Button
						onClick={this._handleRemove}
						bsStyle={'danger'}
					>
						<FontAwesome name={'trash'} />
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default connect((state, props) => {
	const participant = participantsSelectors.selectParticipantItem(state, props.itemId);

	return {
		participant: {
			uuid: participant.uuid,
			userId: participant.userid,
			displayName: participant.display_name,
			role: participant.role,
			email: participant.email,
		},
	};
}, (dispatch) => ({
	onChange: (participant) => dispatch(participantsActions.updateAvenue({
		uuid: participant.uuid,
		data: {
			userid: participant.userId,
			display_name: participant.displayName,
			role: participant.role,
			email: participant.email,
		},
	})),
}))(ParticipantEditor);
