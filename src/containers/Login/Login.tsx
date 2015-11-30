import React = require('react');
import {connect} from 'react-redux';
import TextField = require('material-ui/lib/text-field');
import FlatButton = require('material-ui/lib/flat-button');
import FormEvent = __React.FormEvent;

import {signin} from '../../actions/signin';
import {IAppState} from "../../reducers/reducers";

const styles:any = {
	base: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column'
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
			login: this.props.app.login,
			password: ''
		};
	}

	render() {
		return (
			<div style={styles.base}>
				<h1>login page</h1>
				<div>
					<div>
						<TextField floatingLabelText="№ телефона" type="tel" onChange={this.onLoginChange}/>
						<TextField floatingLabelText="Пароль" type="password" onChange={this.onPasswordChange}/>
					</div>
					<FlatButton label="Вход" secondary={true} type="submit" onTouchTap={this.onSubmit}/>
				</div>
			</div>
		);
	}

	onSubmit = (e:FormEvent) => {
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