import React = require('react');
import MUITextField = require('material-ui/lib/text-field');
import TextFieldProps = __MaterialUI.TextFieldProps;
import {Form} from "../Form/Form";
import {IFormContext} from "../Form/Form";
import {IValidatable} from "../Form/Form";

interface ITextFieldProps extends TextFieldProps {
	validations?: Object|string;
	validationError?: string;
	validationErrors?: Object;
	name: string;
}

interface ITextFieldState {
	isValid: boolean;
}

export class TextField extends React.Component<ITextFieldProps, ITextFieldState> implements IValidatable {
	static contextTypes = {
		form: React.PropTypes.instanceOf(Form).isRequired
	};

	state = {
		isValid: true
	};

	render() {
		return (
			<MUITextField {...this.props} errorText={this.getErrorText()}/>
		);
	}

	protected componentDidMount() {
		const context = this.context as IFormContext;
		context.form.attachItem(this.props.name, this);
	}

	protected componentWillUnmount() {
		const context = this.context as IFormContext;
		context.form.detachItem(this.props.name);
	}

	private getErrorText() {
		const context = this.context as IFormContext;
		if (!this.state.isValid) {
			return 'error';
		}
	}

	validate() {
		const isValid = this.state.isValid;
		this.setState({
			isValid: !isValid
		});
		return !isValid;
	}
}