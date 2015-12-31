import * as React from 'react';
import {connect} from 'react-redux';
import {IState} from '../../reducers/reducers';
import {pushState} from 'redux-router';
import {IAppState} from "../../reducers/reducers";
import {ILocation} from "redux-router";

import LeftNav = require('material-ui/lib/left-nav');
import MenuItem = require('material-ui/lib/menus/menu-item');

import {toggleLeftNav} from '../../actions/ui';
import {signout} from "../../actions/auth";

interface IAuthorizedProps {
	children: React.ReactNode;
	authorized: boolean;
	location: ILocation;
	dispatch: Function;
	isLeftNavOpen: boolean;
}

@connect(mapStateToProps)
export class Home extends React.Component<IAuthorizedProps, {}> {
	componentWillMount() {
		this.checkAuthorization(this.props);
	}

	componentWillReceiveProps(newProps:IAuthorizedProps) {
		this.checkAuthorization(newProps);
	}

	checkAuthorization(props:IAuthorizedProps) {
		if (!props.authorized && props.location.pathname !== '/login') {
			props.dispatch(pushState(null, '/login'));
		}
	}

	render() {
		return (
			<div>
				<LeftNav docked={false}
				         open={this.props.isLeftNavOpen}
				         onRequestChange={this.onLeftNavRequestChange}>
					<MenuItem>Лента</MenuItem>
					<MenuItem>Темы</MenuItem>
					<MenuItem>Профиль</MenuItem>
					<MenuItem onTouchTap={this.onSignoutClick}>Выход</MenuItem>
				</LeftNav>
				{this.props.children}
			</div>
		);
	}

	onSignoutClick = (e:any) => {
		this.props.dispatch(toggleLeftNav(false));
		this.props.dispatch(signout());
	};

	onLeftNavRequestChange = (open:boolean) => {
		this.props.dispatch(toggleLeftNav(open));
	};
}

function mapStateToProps(state:IState) {
	return {
		authorized: state.app.auth.authorized,
		location: state.router.location,
		isLeftNavOpen: state.ui.isLeftNavOpen
	};
}