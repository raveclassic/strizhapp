import * as React from 'react';
import {connect} from 'react-redux';
import {IState} from '../../reducers/reducers';
import {pushState} from 'redux-router';
import {IAppState} from "../../reducers/reducers";
import {ILocation} from "redux-router";

interface IAuthorizedProps {
	children: React.ReactNode;
	authorized: boolean;
	location: ILocation;
	dispatch: Function;
}

@connect(mapStateToProps)
export class Authorized extends React.Component<IAuthorizedProps, {}> {
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
		return this.props.children as any;
	}
}

function mapStateToProps(state:IState) {
	return {
		authorized: state.app.authorized,
		location: state.router.location
	};
}