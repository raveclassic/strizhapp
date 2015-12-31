import * as React from 'react';
import ThemeWrapper = require('material-ui/lib/theme-wrapper');
import ThemeManager = require('material-ui/lib/styles/theme-manager');
import {connect} from 'react-redux';
import Dialog = require('material-ui/lib/dialog');
import RaisedButton = require('material-ui/lib/raised-button');

import {showGlobalError} from '../../actions/app';

import {theme} from '../../theme/theme';
import './App.scss';

interface IAppProps {
	children: React.ReactNode;
	error: Object;
	dispatch: Function;
	loaded:boolean;
}

const styles:any = {
	errorMessage: {
		wordBreak: 'break-word'
	},
	loading: {
		textAlign: 'center',
		paddingTop: '200px'
	}
};

@connect(state => {
	return {
		error: state.app.error,
		loaded: state.app.loaded
	};
})
export class App extends React.Component<IAppProps, {}> {
	render() {
		switch (this.props.loaded) {
			case true:
				const errorDialogButton = (
					<RaisedButton label="OK" onTouchTap={this.onDismiss}/>
				);
				return (
					<ThemeWrapper theme={ThemeManager.getMuiTheme(theme)}>
						<div>
							{this.props.children}
							<Dialog open={!!this.props.error}
							        title="Произошла ошибка!"
							        onRequestClose={this.onDismiss}
							        actions={[errorDialogButton]}>
								<pre style={styles.errorMessage}>
									{this.props.error && JSON.stringify(this.props.error, null, 4)}
								</pre>
							</Dialog>
						</div>
					</ThemeWrapper>
				);
			case false:
				return (
					<div style={styles.loading}>Загрузка...</div>
				);
		}
	}

	onDismiss = () => {
		this.props.dispatch(showGlobalError(null));
	};
}