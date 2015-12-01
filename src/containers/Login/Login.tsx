import React = require('react');
import {connect} from 'react-redux';
import TextField = require('material-ui/lib/text-field');
import FlatButton = require('material-ui/lib/flat-button');
import Dialog = require('material-ui/lib/dialog');
import FormEvent = __React.FormEvent;

import {signin} from '../../actions/auth';
import {IAppState} from "../../reducers/reducers";

import {theme} from '../../theme/theme';

const styles:any = {
	base: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		color: theme.palette.primary1Color,
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
	constructor(props:any, context:any) {
		super(props, context);
		this.state = {
			login: '',
			password: ''
		};
	}

	render() {
		const processing = this.props.app.auth.processing;
		return (
			<div style={styles.base}>
				<h1 style={styles.title}>Авторизация</h1>
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
			<form onSubmit={this.onSubmit}>
				<div>
					<TextField floatingLabelText="№ телефона" type="tel" onChange={this.onLoginChange}/>
				</div>
				<div>
					<TextField floatingLabelText="Пароль" type="password" onChange={this.onPasswordChange}/>
				</div>
				<FlatButton label="Вход" secondary={true} type="submit"/>
			</form>
		);
	}

	onSubmit = (e:FormEvent) => {
		e.preventDefault();
		const {login, password} = this.state;
		if (login && password) { //todo: validate
			this.props.dispatch(signin(login, password));
		}
	};

	onLoginChange = (e:FormEvent) => {
		const target = e.target as HTMLInputElement;
		this.setState({
			login: target.value
		});
	};

	onPasswordChange = (e:FormEvent) => {
		const target = e.target as HTMLInputElement;
		this.setState({
			password: target.value
		});
	};
}