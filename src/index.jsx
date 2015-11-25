import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {ReduxRouter} from 'redux-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {configureStore} from './store.js';
const store = configureStore({
	app: {}
});

import './styles/common.scss';

render(
	<Provider store={store}>
		<ReduxRouter/>
	</Provider>,
	document.getElementById('app')
);

import {User} from './models/User.ts';
User.findAll().then(console.log.bind(console)).catch(console.error.bind(console));