import React = require('react');
import {reduxForm} from "redux-form";
import {theme} from "../../theme/theme";

import RaisedButton = require('material-ui/lib/raised-button');
import TextField = require('material-ui/lib/text-field');

const styles:any = {
	textField: {
		input: {
			color: theme.palette.accent2Color
		},
		hint: {
			color: theme.palette.accent2Color,
			fontSize: 12
		},
		error: {
			position: 'absolute',
			top: '100%'
		},
		floatingLabel: {
			color: theme.palette.accent2Color
		},
		underline: {},
		underlineFocus: {
			borderColor: theme.palette.accent1Color
		}
	},
	submit: {
		marginTop: 30
	}
};

export interface ILoginFormValues {
	phone?:string;
	password?:string;
}

function validate(values:ILoginFormValues):ILoginFormValues {
	const errors:ILoginFormValues = {};
	if (!/^\d{11}$/.test(values.phone)) {
		errors.phone = 'Неверный номер телефона';
	}
	if (!values.password) {
		errors.password = 'Введите пароль';
	}
	return errors;
}

interface ILoginFormProps {
	handleSubmit: React.EventHandler<React.FormEvent>;
	fields: {
		phone: any;
		password: any;
	};
}

class LoginForm extends React.Component<ILoginFormProps, {}> {
	render() {
		const {fields: {phone, password}} = this.props;
		return (
			<form ref="form"
			      autoComplete="off"
			      autoCorrect="off"
			      onSubmit={this.props.handleSubmit}
			      noValidate={true}>
				<div>
					<TextField {...phone}
						floatingLabelText="№ телефона"
						hintText="11 цифр"
						type="tel"
						errorStyle={styles.textField.error}
						errorText={phone.touched && phone.error}
						inputStyle={styles.textField.input}
						hintStyle={styles.textField.hint}
						floatingLabelStyle={styles.textField.floatingLabel}
						underlineFocusStyle={styles.textField.underlineFocus}/>
				</div>
				<div>
					<TextField {...password}
						floatingLabelText="Пароль"
						type="password"
						errorStyle={styles.textField.error}
						errorText={password.touched && password.error}
						inputStyle={styles.textField.input}
						hintStyle={styles.textField.hint}
						floatingLabelStyle={styles.textField.floatingLabel}
						underlineFocusStyle={styles.textField.underlineFocus}/>
				</div>
				<RaisedButton label="Вход"
				              type="submit"
				              style={styles.submit}/>
			</form>
		);
	}
}

const Form = reduxForm({
	form: 'auth',
	fields: [
		'phone',
		'password'
	],
	validate
})(LoginForm);

export {
	Form as LoginForm
}