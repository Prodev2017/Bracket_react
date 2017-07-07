import React, { Component } from 'react';

import { connect } from 'react-redux';
/*
import { showModal, addParticipant, addClause } from '../../actions';
import { Button } from 'react-bootstrap';

import LoadTradeModal from '../../components/modals/load-trade';

import EmptyEditor from './editors/empty';
import TradeEditor from './editors/trade';
import ClauseEditor from './editors/clause';
import AvenueEditor from './editors/avenue';
*/

/*import { getFocus } from '../../reducers/focus';
import { getTemplate } from '../../reducers/template';
import { clauseCreator } from '../../reducers/clauses';*/

import editorsConfig from '../../configs/editors';
import activeEntitySelectors from '../../selectors/activeEntitySelectors';


import './styles/Editor.css';


const baseCssClassName = 'editor';
const headerCssClassName = `${baseCssClassName}__header`;
const titleCssClassName = `${baseCssClassName}__title`;
const paneCssClassName = `${baseCssClassName}__pane`;
const noEditorSelectedCssClassName = `${baseCssClassName}__no-editor-selected`;


class Editor extends Component {
	renderEditWindow() {
		const {
			editor,
		} = this.props;
		
		if ( editor ) {
			const Component = editor;

			return (<Component itemId={this.props.itemId} />);
		}

		let message = null;

		if ( this.templatePublished ) {
			message = `Since your trade has already been published, you will not be able to edit the actors or completed events in this transaction. You are able to add new events, as well as edit events that have yet to be completed. When you are ready to publish your edits, click the 'Republish' button below the bracket.`;
		} else {
			// @todo FontAwesome
			message = (
				<span>
					Use this pane to edit your trade. Click any actor or event to edit its properties. Click the <i className='fa fa-fw fa-user-plus'></i> icon in the top right to add new actors. Click the <i className='fa fa-fw fa-calendar-plus-o'></i> icon in the top right to add new events. Click the folder in the bottom pane to save your edits, and the upload icon to load a previously saved trade. When you are ready to publish your bracket, click the 'Publish' button below the bracket.
				</span>
			);
		}

		return (
			<div className={noEditorSelectedCssClassName}>
				{message}
			</div>
		);
	}

	render () {
		// @todo Col
		return (
			<div className={baseCssClassName}>
				<div className={headerCssClassName}>
					<div className={`col-xs-4 ${titleCssClassName}`}></div>
				</div>
				<div className={paneCssClassName}>
					{this.renderEditWindow()}
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	const activeEntity = activeEntitySelectors.selectActiveEntity(state);

	return {
		editor: (
			activeEntity
				? editorsConfig.getEditorsComponentsMap()[activeEntity.type]
				: null
		),
		itemId: ( activeEntity ? activeEntity.id : null ),
	};
})(Editor);
