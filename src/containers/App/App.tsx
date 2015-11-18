import * as React from 'react';
import ThemeWrapper = require('material-ui/lib/theme-wrapper');
import ThemeManager = require('material-ui/lib/styles/theme-manager');

import {theme} from '../../theme/theme';
import './App.scss';

interface IAppProps {
	children: React.ReactNode;
}

export class App extends React.Component<IAppProps, {}> {
	render() {
		return (
			<ThemeWrapper theme={ThemeManager.getMuiTheme(theme)}>
				{() => this.props.children}
			</ThemeWrapper>
		);
	}
}