import React from 'react';
import {Route} from 'react-router';
import {App} from './containers/App/App.tsx';
import {Authorized} from './containers/Authorized/Authorized.tsx';
import {Test} from './containers/Test/Test.tsx';

export const routes = (
	<Route path="/" component={App}>
		<Route path="home" component={Authorized}/>
		<Route path="test" component={Test}/>
	</Route>
);