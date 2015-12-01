import * as React from 'react';
import * as ReactDom from 'react-dom';
import {pushState} from 'redux-router';
import {connect} from 'react-redux';

import AppBar = require('material-ui/lib/app-bar');
import IconButton = require('material-ui/lib/icon-button');
import ActionSearch = require('material-ui/lib/svg-icons/action/search');
import LeftNav = require('material-ui/lib/left-nav');
import MenuItem = require('material-ui/lib/menu/menu-item');

import {FeedItem} from './FeedItem';
import {theme} from '../../theme/theme';

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

const menuItems = [
	{
		text: 'Лента'
	},
	{
		text: 'Диалоги'
	},
	{
		text: 'Темы'
	},
	{
		text: 'Профиль'
	},
	{
		text: 'Выход',
		onItemTouchTap() {
			console.log('hi');
		}
	}
];

@connect(state => state)
export class Feed extends React.Component<any, any> {
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
				<LeftNav docked={false} ref="leftNav" menuItems={menuItems} onChange={this.onLeftNavChange}/>
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
		const leftNav = this.refs['leftNav'] as LeftNav;
		leftNav.toggle();
	};

	onLeftNavChange = (e:any) => {
		console.log('hi', e.target);
	};
}