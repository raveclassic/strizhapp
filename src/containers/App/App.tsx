import * as React from 'react';
import ThemeWrapper = require('material-ui/lib/theme-wrapper');
import ThemeManager = require('material-ui/lib/styles/theme-manager');
import {connect} from 'react-redux';
import Dialog = require('material-ui/lib/dialog');

import {showGlobalError} from '../../actions/app';

import {theme} from '../../theme/theme';
import './App.scss';

interface IAppProps {
	children: React.ReactNode;
	error: Object;
	dispatch: Function;
}

const styles:any = {
	errorMessage: {
		wordBreak: 'break-word'
	}
};

@connect(state => {
	return {
		error: state.app.error
	};
})
export class App extends React.Component<IAppProps, {}> {
	render() {
		return (
			<ThemeWrapper theme={ThemeManager.getMuiTheme(theme)}>
				{() => (
					<div>
						{this.props.children}
						<Dialog open={!!this.props.error}
						        title="Произошла ошибка!"
						        onRequestClose={this.onDismiss}>
							<pre style={styles.errorMessage}>
								{this.props.error && JSON.stringify(this.props.error, null, 4)}
							</pre>
						</Dialog>
					</div>
				)}
			</ThemeWrapper>
		);
	}

	onDismiss = () => {
		this.props.dispatch(showGlobalError(null));
	};
}