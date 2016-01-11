import React = require('react');

interface IFormProps extends React.HTMLProps<Form> {
	onSuccess?: (...args:Array<any>) => void;
	onError?: (...args:Array<any>) => void;
	onSubmit?: (...args:Array<any>) => void;
	onValidSubmit?: (...args:Array<any>) => void;
	onInvalidSubmit?: (...args:Array<any>) => void;
	onSubmitted?: (...args:Array<any>) => void;
	onValid?: (...args:Array<any>) => void;
	onInvalid?: (...args:Array<any>) => void;
	onChange?: (...args:Array<any>) => void;
	validationErrors?: Object;
	preventExternalInvalidation?: boolean;
}

export interface IValidatable {
	validate: () => boolean;
}

export interface IFormContext {
	form: Form;
}

export class Form extends React.Component<IFormProps, {}> implements React.ChildContextProvider<IFormContext>,
	IValidatable {
	/*tslint:disable no-empty*/
	static defaultProps = {
		onSubmit() {
		},
		onValidSubmit() {
		},
		onInvalidSubmit() {
		}
	};

	static childContextTypes:React.ValidationMap<any> = {
		form: React.PropTypes.instanceOf(Form).isRequired
	};

	getChildContext() {
		return {
			form: this
		};
	}

	private items:{[key:string]: IValidatable} = {};

	render() {
		return (
			<form {...(this.props as React.HTMLAttributes)} onSubmit={this.onSubmit}>
				{this.props.children}
			</form>
		);
	}

	private onSubmit = (e:React.FormEvent) => {
		e.preventDefault();
		this._isPristine = false;
		this._isValid = this.validate();
		console.log(this._isValid);
		//this.props.onSubmit();
		//if (this.isValid) {
		//	this.props.onValidSubmit();
		//} else {
		//	this.props.onInvalidSubmit();
		//}
	};

	private _isValid = true;
	get isValid() {
		return this._isValid;
	}

	private _isPristine = true;
	get isPristine() {
		return this._isPristine;
	}

	attachItem(name:string, item:IValidatable) {
		this.items[name] = item;
	}

	detachItem(name:string) {
		delete this.items[name];
	}

	validate() {
		return Object.keys(this.items).every(key => this.items[key].validate());
	}
}