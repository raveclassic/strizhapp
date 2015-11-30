import React = require('react');
import AppBar = require('material-ui/lib/app-bar');

export class Test extends React.Component<any, any> {
	render() {
		console.log('test');
		return (
			<div>
				<AppBar title="Feed"/>
			</div>
		);
	}
}