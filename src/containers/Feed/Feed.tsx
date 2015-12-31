import * as React from 'react';
import * as ReactDom from 'react-dom';
import {pushState} from 'redux-router';
import {connect} from 'react-redux';

import AppBar = require('material-ui/lib/app-bar');
import IconButton = require('material-ui/lib/icon-button');
import ActionSearch = require('material-ui/lib/svg-icons/action/search');

import {FeedItem} from './FeedItem';
import {theme} from '../../theme/theme';

import {toggleLeftNav} from '../../actions/ui';

//const devBg = require('./dev-bg.jpg');

const styles:any = {
	base: {
		//background: `url('${devBg}') no-repeat`,
		//backgroundSize: 'cover',
		//backgroundPositionY: '-8px',
		//maxWidth: '320px',
		WebkitOverflowScrolling: 'touch'
	},
	appBar: {
		position: 'fixed'
	},
	list: {
		paddingTop: theme.spacing.desktopKeylineIncrement
	}
};

interface IFeedState {
	navOpen: boolean;
}

@connect(state => state)
export class Feed extends React.Component<any, any> {
	state = {
		navOpen: false
	};

	render() {
		const items = [
			'A',
			'B',
			'C',
			'A',
			'B',
			'C'
		];
		const searchButton = (
			<IconButton>
				<ActionSearch/>
			</IconButton>
		);
		return (
			<div style={styles.base}>
				<AppBar title="Лента"
				        style={styles.appBar}
				        iconElementRight={searchButton}
				        onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}/>
				<div style={styles.list}>
					{items.map((item, i) => <FeedItem key={i} highlight={!!(i % 2)}/>)}
				</div>
			</div>
		);
	}

	onLeftIconButtonTouchTap = () => {
		this.props.dispatch(toggleLeftNav());
	};
}