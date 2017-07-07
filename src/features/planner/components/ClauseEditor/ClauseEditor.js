import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Tabs,
	Tab,
} from 'react-bootstrap';
// import Icon from 'shared/components/icon';
// import PlanForm from './plan-form';
// import EditForm from './edit-form';
// import TypeForm from './type-form';

import FontAwesome from 'react-fontawesome';

import {
	ButtonGroup,
	Button,
} from 'react-bootstrap';

// import { removeClause, focus } from '../../../../actions';
import clausesSelectors from '../../selectors/clausesSelectors';
import participantsSelectors from '../../selectors/participantsSelectors';

import PlanForm from './forms/PlanForm';


const baseCssClassName = 'clause-editor';


class ClauseEditor extends Component {
	_handleRemove = () => {

	}

	render() {
		return (
			<div className={baseCssClassName}>
				<Tabs defaultActiveKey={'plan'} id='dashboard-tabs' justified>
					<Tab eventKey={'plan'} title={<div><i className="fa fa-cog" /></div>} className={'dashboard-tab'}>
						<PlanForm
							clause={this.props.clause}
							participants={this.props.participants}
						/>
					</Tab>
					<Tab eventKey={'edit'} title={<div><i className="fa fa-eye" /></div>} className={'dashboard-tab'}>
						b
					</Tab>
					<Tab eventKey={'type'} title={<div><i className="fa fa-tags" /></div>} className={'dashboard-tab'}>
						c
					</Tab>
				</Tabs>

				<ButtonGroup>
					<Button
						bsStyle={'danger'}
						onClick={this._handleRemove}
					>
						<FontAwesome name={'trash'} />
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default connect((state, props) => ({
	clause: clausesSelectors.selectClauseItem(state, props.itemId),
	participants: participantsSelectors.selectOrderedParticipantsItems(state),
}))(ClauseEditor);
