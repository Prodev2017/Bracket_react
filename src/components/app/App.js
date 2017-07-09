import React, { Component } from 'react';

import MainLayout from '../../layouts/Main';

import Login from '../../components/Login';
import Main from '../../components/Main';


class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			isAuthenticated: false,
		};
	}
	_handleLoginSuccess = () => {
		this.setState({
			isAuthenticated: true,
		});

	}

	render () {
		const {
			isAuthenticated,
		} = this.state;

		return (
			<MainLayout>
				{ !isAuthenticated && (<Login onSuccess={this._handleLoginSuccess} />) }

				{ isAuthenticated && (<Main />)}

			</MainLayout>
		);
	}
}


export default App;
