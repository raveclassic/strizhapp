import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from './containers/App/App.tsx';
import {Authorized} from './containers/Authorized/Authorized.tsx';
import {Test} from './containers/Test/Test.tsx';
import {Feed} from './containers/Feed/Feed.tsx';

export const routes = (
	<Route path="/" component={App}>
		<Route component={Authorized}>
			<IndexRoute component={Feed}/>
		</Route>
		<Route path="login" component={Test}/>
	</Route>
);