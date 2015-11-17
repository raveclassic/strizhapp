import * as React from 'react';
import {ReactNode, Component} from 'react';

interface IPageProps {
	header?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
}

export class Page extends Component<IPageProps, {}> {
	render() {
		return (
			<div className="page">
				<div className="page--header">
					{this.props.header}
				</div>
				<div className="page--body">
					{this.props.children}
				</div>
				<div className="page--footer">
					{this.props.footer}
				</div>
			</div>
		);
	}
}