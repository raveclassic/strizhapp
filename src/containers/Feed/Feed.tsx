import * as React from 'react';

import AppBar = require('material-ui/lib/app-bar');
import {FeedItem} from './FeedItem';
import {raw} from '../../theme/theme';

export class Feed extends React.Component<any, any> {
	render() {
		const styles = this.styles;
		const items = [
			'A',
			'B',
			'C'
		];
		return (
			<div style={styles.base}>
				<AppBar title="Лента" style={styles.appBar}/>
				<div style={styles.list}>
					{items.map((item, i) => <FeedItem highlight={!!(i % 2)}/>)}
				</div>
			</div>
		);
	}

	get styles():any {
		return {
			base: {},
			appBar: {
				position: 'absolute'
			},
			list: {
				paddingTop: raw.spacing.desktopKeylineIncrement
			}
		};
	}
}