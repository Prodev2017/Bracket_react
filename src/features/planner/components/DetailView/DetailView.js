import React, { PureComponent } from 'react';
// import submitCreation from "_csi/server/submit-creation";
// import denormalize from "../utils/denormalize";

import { connect } from 'react-redux';
import {
	FormGroup,
	FormControl,
	Row,
	Col,
	Button,
	Alert,
} from 'react-bootstrap';

import Editor from "../Editor";
import BracketContainer from '../BracketContainer';
// import ModalContainer from "../containers/modal-container";
import NameInput from '../../../../components/NameInput';

// import Setup from "./setup";
// import Publish from "./publish";

// import validatePlan from "../utils/validate-plan";

// import {
// 	toggleMeta,
// 	loadTrade,
// 	makeTradeRequest,
// 	publishTemplate,
// 	requestTemplate,
// 	requestPlan,
// 	createPlan,
// 	savePlan,
// 	showError,
// 	showModal
// } from "../actions";
// import { getClauses } from "../reducers/clauses";
// import { getParticipants } from "../reducers/participants";
// import { getTrades } from "../reducers/trades";
// import { getAccords } from "../reducers/accords";
// import { getMetaView } from "../reducers/meta-view";
// import { getTemplate } from "../reducers/template";
// import { getName } from "../reducers/name";
// import { getError } from "../reducers/error";
// import { getGuarantee } from "../reducers/guarantee";


class Planner extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			published: false,
			templateId: null,
			planId: null,
			forceNew: false,

			name: '',
		};
	}

	componentWillMount() {
		// const params = new URLSearchParams(window.location.search);
		// if (params.has("plan_id")) {
		// 	this.props.dispatch(
		// 		requestPlan(params.get("plan_id"), params.has("new"))
		// 	);
		// 	this.setState({ planId: params.get("plan_id") });
		// } else if (params.has("template_id")) {
		// 	this.props.dispatch(requestTemplate(params.get("template_id")));
		// 	this.setState({ templateId: params.get("template_id") });
		// }
		//
		// if (params.has("new")) {
		// 	this.setState({ forceNew: true });
		// }
	}

	finishSave = redirect => {
		// const { templateId, planId, forceNew } = this.state;
		// const { dispatch, plan, name } = this.props;
		// const result = validatePlan({plan, name});
		//
		// if (result.valid) {
		// 	dispatch(savePlan(planId, name, plan, redirect));
		// } else {
		// 	dispatch(showError(result));
		// }
	};

	finishCreate = () => {
		// const { templateId, planId, forceNew } = this.state;
		// const { dispatch, plan, name } = this.props;
		// const result = validatePlan({plan, name});
		//
		// if (result.valid) {
		// 	dispatch(createPlan(name, plan));
		// } else {
		// 	dispatch(showError(result));
		// }
	};

	_handleChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	}

	render() {
		const { templateId, planId, forceNew } = this.state;
		const { dispatch, plan, name, error } = this.props;

		const isSavable = planId !== null && !forceNew;
		return (
			<Row>
				<Col xs={9}>
					<NameInput
						value={this.state.name}
						onChange={this._handleChange}
					/>
				</Col>
				<Col xs={9}>
					<BracketContainer />
					{error &&
					<Row className="error-row">
						<Alert bsStyle="validation">
							<strong>
								Your plan cannot be saved as defined.
							</strong>
							&nbsp;{error}
						</Alert>
					</Row>}

					<Row>
						<Col
							style={{
                                marginTop: 10,
                                marginLeft: 32
                            }}
							xs={12}
						>
							{isSavable &&
							<Button
								style={{ marginRight: 15 }}
								onClick={this.finishSave.bind(this, false)}
							>
								Save
							</Button>}

							{isSavable &&
							<Button
								bsStyle="primary"
								style={{ marginRight: 15 }}
								onClick={this.finishSave.bind(this, true)}
							>
								Save & Exit
							</Button>}
							<Button
								bsStyle="success"
								onClick={this.finishCreate}
							>
								Save as New Plan
							</Button>
						</Col>
					</Row>

				</Col>
				<Col xs={3} className="bracket-info-col">
					<Editor />
				</Col>

				{/*<ModalContainer />*/}
			</Row>
		);
	}
}

/*function mapStateToProps(state) {
	return {
		name: getName(state),
		error: getError(state),
		plan: denormalize({
			clauses: getClauses(state),
			participants: getParticipants(state),
			accords: getAccords(state),
			guarantee: getGuarantee(state)
		})
	};
}

export default connect(mapStateToProps)(Planner);*/

export default Planner;
