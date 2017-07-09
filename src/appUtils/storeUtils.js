import reduxThunkMiddleware from 'redux-thunk';
import { v4 } from 'node-uuid';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import appConfig from './../configs/app';


function getReducer () {
	const config = appConfig.getConfig();

	return combineReducers(Object.keys(config).reduce((result, featureName) => {
		const feature = config[featureName];
		
		if ( typeof feature.reducer === 'function' ) {
			result[featureName] = feature.reducer;
		}
		
		return result;
	}, {}));
}

/**
 * Returns base enhancers.
 *
 * @returns {Array.<Function>}
 */
function getMiddlewares () {
  return [
      reduxThunkMiddleware,
  ];
}

/**
 * Creates a configured store.
 *
 * @returns {Object}
 */
function configureStore() {
    const enhancers = [
        applyMiddleware(...getMiddlewares()),
    ];

    return createStore(
        getReducer(),
		appConfig.getInitialState(),
        compose(...enhancers)
    );
}

/**
 * @typedef {Object} ReduxAction
 * 
 * @property {string|Symbol} type
 * @property {any} [payload=undefined]
 * @property {any} [meta=undefined]
 */


/**
 * Makes a redux action.
 * 
 * @param {string|Symbol} type
 * @param {any} [payload=undefined]
 * @param {any} [meta=undefined]
 * @returns {ReduxAction}
 */
function makeAction (type, payload = undefined, meta = undefined) {
	if ( !type || !( typeof type === 'string' || type instanceof Symbol ) ) {
		throw new Error('Argument type should be a string or Symbol');
	}

	return {
		type,
		payload,
		meta,
	};
}

function createUUID () {
	return v4();
}

export default {
    configureStore,
	makeAction,
	createUUID,
};
