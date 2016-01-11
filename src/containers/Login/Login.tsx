import React = require('react');
import {connect} from 'react-redux';
import {FormsyText} from 'formsy-material-ui';
import FlatButton = require('material-ui/lib/flat-button');

import Dialog = require('material-ui/lib/dialog');
import FormEvent = __React.FormEvent;

import {LoginForm} from './LoginForm';

import {signin} from '../../actions/auth';
import {IAppState} from "../../reducers/reducers";

import {theme} from '../../theme/theme';
import {reduxForm} from "redux-form";
import {ILoginFormValues} from "./LoginForm";

const styles:any = {
	base: {
		textAlign: 'center',
		backgroundColor: theme.palette.primary1Color,
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'center'
	},
	title: {
		color: theme.palette.accent2Color,
		fontWeight: 500
	}
};

interface ILoginProps {
	dispatch: Function;
	router: any;
	app: IAppState;
}

interface ILoginState {
	login?: string;
	password?: string;
}

@connect(state => state)
export class Login extends React.Component<ILoginProps, ILoginState> {
	render() {
		const processing = this.props.app.auth.processing;
		return (
			<div style={styles.base}>
				<h1 style={styles.title}>Вход</h1>
				{processing && this.renderProcessing()}
				{!processing && this.renderForm()}
			</div>
		);
	}

	renderProcessing() {
		return (
			<div>Авторизация...</div>
		);
	}

	renderForm() {
		return (
			<LoginForm onSubmit={this.onSubmit}/>
		);
	}

	onSubmit = (data:ILoginFormValues) => {
		this.props.dispatch(signin(data.phone, data.password));
	};
}