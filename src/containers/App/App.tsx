import * as React from 'react';
import ThemeWrapper = require('material-ui/lib/theme-wrapper');
import ThemeManager = require('material-ui/lib/styles/theme-manager');
import {connect} from 'react-redux';
import Dialog = require('material-ui/lib/dialog');
import RaisedButton = require('material-ui/lib/raised-button');
import CircularProgress = require('material-ui/lib/circular-progress');

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
	base: {
		height: '100%'
	},
	errorMessage: {
		wordBreak: 'break-word'
	},
	loading: {
		backgroundColor: theme.palette.primary1Color,
		position: 'relative',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};

@connect(state => {
	return {
		error: state.app.error,
		loaded: state.app.loaded
	};
})
export class App extends React.Component<IAppProps, {}> {
	renderLoading() {
		return (
			<div style={styles.loading}>
				<CircularProgress mode="indeterminate" color={theme.palette.accent2Color}/>
			</div>
		);
	}

	renderLoaded() {
		const errorDialogButton = (
			<RaisedButton label="OK" onTouchTap={this.onDismiss}/>
		);
		return (
			<div style={styles.base}>
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
		);
	}

	render() {
		return (
			<ThemeWrapper theme={ThemeManager.getMuiTheme(theme)}>
				{this.props.loaded ? this.renderLoaded() : this.renderLoading()}
			</ThemeWrapper>
		);
	}

	onDismiss = () => {
		this.props.dispatch(showGlobalError(null));
	};
}