import {Store, createStore, compose} from 'redux';
import {reduxReactRouter} from 'redux-router';
import {createHashHistory} from 'history';
import {root} from './reducers/reducers';
import {IState} from './reducers/reducers';
import {routes} from './routes.jsx';

const finalCreateStore = compose(
	reduxReactRouter({
		routes,
		createHistory: createHashHistory
	})
)(createStore);

export function configureStore(initialState) {
	return finalCreateStore(root, initialState);
}