import React = require('react');
import {RaisedButton, AppBar} from 'material-ui';

export class Test extends React.Component<any, any> {
	render() {
		return (
			<div>
				<AppBar title="Feed"/>
				<RaisedButton label="hi"></RaisedButton>
			</div>
		);
	}
}