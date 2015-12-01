import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {ReduxRouter} from 'redux-router';
import {Root} from './containers/Root/Root.tsx';
import {User} from './models/User.ts';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './api/DS.ts';
import {client} from './api/Client.ts';
window.client = client;
import {configureStore} from './store.js';
const store = window.store = configureStore({
	app: {}
});

import './styles/common.scss';

render(
	<Root store={store}/>,
	document.getElementById('app')
);

User.findAll().then(console.log.bind(console)).catch(console.error.bind(console));