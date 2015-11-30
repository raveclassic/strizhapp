import {Store, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reduxReactRouter} from 'redux-router';
import {createHashHistory} from 'history';
import {root} from './reducers/reducers';
import {IState} from './reducers/reducers';
import {routes} from './routes.tsx';

const middleware = applyMiddleware(thunk, logger);

const finalCreateStore = compose(
	middleware,
	reduxReactRouter({
		routes,
		createHistory: createHashHistory
	})
)(createStore);

export function configureStore(initialState) {
	return finalCreateStore(root, initialState);
}