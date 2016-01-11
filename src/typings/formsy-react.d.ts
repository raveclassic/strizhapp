declare module 'formsy-react' {
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
	export class Form extends React.Component<IFormProps, any> {
	}

	export const addValidationRule:(name:string, func:Function) => void;
}