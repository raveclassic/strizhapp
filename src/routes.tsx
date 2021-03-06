import React = require('react');
import {Route, IndexRedirect} from 'react-router';
import {App} from './containers/App/App';
import {Home} from './containers/Home/Home';
import {Test} from './containers/Test/Test';
import {Feed} from './containers/Feed/Feed';
import {Login} from "./containers/Login/Login";

export const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/home/feed"/>
		<Route path="home" component={Home}>
			<Route path="feed" component={Feed}/>
		</Route>
		<Route path="login" component={Login}/>
	</Route>
);