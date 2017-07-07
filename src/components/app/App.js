import React, { Component } from 'react';

import MainLayout from '../../layouts/Main';

import Login from '../../components/Login';


class App extends Component {
	render () {
		return (
			<MainLayout>
				<Login />

			</MainLayout>
		);
	}
}

export default App;