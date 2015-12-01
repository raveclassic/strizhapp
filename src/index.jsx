import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {ReduxRouter} from 'redux-router';
import {Root} from './containers/Root/Root.tsx';

import {checkAuth} from './actions/auth.ts';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './api/DS.ts';
import {client} from './api/Client.ts';
window.client = client;
import {configureStore} from './store.js';
const store = configureStore({
	app: {
		auth: null,
		error: null
	}
});

import './styles/common.scss';

render(
	<Root store={store}/>,
	document.getElementById('app')
);

//bootstrap
store.dispatch(checkAuth());