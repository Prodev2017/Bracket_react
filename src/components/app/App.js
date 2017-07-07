import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import storeUtils from '../../appUtils/storeUtils';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import userSelectors from '../../features/user/selectors/userSelectors';


import MainLayout from '../../layouts/Main';

import Login from '../../features/user/components/Login';
import Main from '../../components/Main';
import Planner from '../../features/planner/components/Planner';
import Bracket from '../../features/planner/components/Bracket/Bracket';
import EditTermSheet from '../../features/planner/components/Bracket/EditTermSheet';


class App extends Component {
	constructor(props, context) {
		super(props, context);

		this._store = storeUtils.configureStore();
		this._storeUnsubscribeCallback = null;
	}

	componentDidMount () {
		this._storeUnsubscribeCallback = this._store.subscribe(this._handleStoreChange);
	}

	componentWillUnmount () {
		this.state = null;

		if ( this._storeUnsubscribeCallback ) {
			this._storeUnsubscribeCallback();
		}
	}

	_handleStoreChange = () => {
		if ( !this._storeUnsubscribeCallback ) {
			return;
		}

		this.forceUpdate();
	}

	render () {
		console.dir(this._store.getState());
		return (
			<StoreProvider store={this._store}>
				<Router>
					<MainLayout>
						<Route exact path={'/'} component={( userSelectors.isAuthenticated(this._store.getState()) ? Main : Login )} />

						<Route path={'/planner/:templateId'} component={Planner} />
						<Route path={'/brackets'} component={Bracket} />
						<Route path={'/editTermSheet'} component={EditTermSheet} />
					</MainLayout>
				</Router>
			</StoreProvider>
		);
	}
}

export default App;
