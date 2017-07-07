import initialState from './../appUtils/initialState';

import userConfigFactory from '../features/user';
import plannerConfigFactory from '../features/planner';


const config = {
	user: userConfigFactory(),
	planner: plannerConfigFactory(),
};

function getConfig () {
	return config;
}

function getInitialState () {
	return initialState;
}

export default {
	getConfig,
	getInitialState,
};
