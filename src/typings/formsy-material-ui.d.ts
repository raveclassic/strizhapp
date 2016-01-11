declare module 'formsy-material-ui' {
	import TextFieldProps = __MaterialUI.TextFieldProps;

	interface IFormsyProps {
		validations?: Object|string;
		validationError?: string;
		validationErrors?: Object;
		required?: boolean|string;
	}

	interface IFormsyTextProps extends TextFieldProps, IFormsyProps {
		name: string;
	}
	export class FormsyText extends React.Component<IFormsyTextProps, {}> {

	}
}