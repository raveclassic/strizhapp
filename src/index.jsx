import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect} from 'react-router';
import {ReduxRouter} from 'redux-router';
import {Root} from './containers/Root/Root.tsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {configureStore} from './store.js';
const store = window.store = configureStore({
	app: {}
});

import './styles/common.scss';

render(
	<Root store={store}/>,
	document.getElementById('app')
);