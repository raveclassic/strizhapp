import React = require('react');
import {Paper} from '../../components/Paper/Paper';
import bem from '../../util/bem';

interface IRaisedButtonProps {
	label: React.ReactNode;
	children?: React.ReactNode;
	disabled?: boolean;
}

interface IRaisedButtonState {
	hovered: boolean;
	touched: boolean;
	initialDepth: number;
	zDepth: number;
}

export class RaisedButton extends React.Component<IRaisedButtonProps, any> {
	constructor(props:any) {
		super(props);

		let zDepth = props.disabled ? 0 : 1;
		this.state = {
			hovered: false,
			touched: false,
			initialZDepth: zDepth,
			zDepth: zDepth
		};
	}

	componentWillReceiveProps(newProps) {
		const zDepth = newProps.disabled ? 0 : 1;
		this.setState({
			zDepth: zDepth,
			initialZDepth: zDepth
		});
	}

	render() {
		return (
			<Paper zDepth={this.state.zDepth}></Paper>
		);
	}
}