import React = require('react');
import bem from '../../util/bem';
import classnames = require('classnames');
import './Paper.theme.scss';

interface IPaperProps {
	circle?: boolean;
	rounded?: boolean;
	transitionEnabled?: boolean;
	zDepth?: number;
	children?: React.ReactNode;
}

export class Paper extends React.Component<IPaperProps, any> {
	static defaultProps = {
		zDepth: 1,
		circle: false,
		rounded: true,
		transitionEnabled: true
	};

	render() {
		return (
			<div className={this.className}>
				{this.props.children}
			</div>
		);
	}

	get className():string {
		return bem('paper', {
			[`zDepth-${this.props.zDepth}`]: true,
			circle: this.props.circle,
			rounded: this.props.rounded,
			transitionEnabled: this.props.transitionEnabled
		});
	}
}