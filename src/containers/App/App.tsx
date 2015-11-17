import * as React from 'react';
import {ThemeWrapper} from 'material-ui';
import {theme} from '../../theme/theme';
import './App.scss';

interface IAppProps {
	children: React.ReactNode;
}

export class App extends React.Component<IAppProps, {}> {
	render() {
		return (
			<ThemeWrapper theme={theme}>
				{() => this.props.children}
			</ThemeWrapper>
		);
	}
}