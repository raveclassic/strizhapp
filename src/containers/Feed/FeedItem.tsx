import * as React from 'react';
import Avatar = require('material-ui/lib/avatar');

import {raw} from '../../theme/theme';

interface IFeedItemProps {
	highlight:boolean;
}

export class FeedItem extends React.Component<IFeedItemProps, any> {
	render() {
		const styles = this.styles;
		return (
			<div style={styles.base}>
				<div style={styles.header.base}>
					<Avatar>ОЕ</Avatar>
				</div>
				<div style={styles.preview.base}>
					<div style={styles.preview.title}>Квартира в Сокольниках</div>
				</div>
			</div>
		);
	}

	get styles():any {
		return {
			base: {

			},
			header: {
				base: {
					padding: raw.spacing.desktopGutterLess
				}
			},
			preview: {
				base: {
					padding: raw.spacing.desktopGutterLess
				},
				title: {

				}
			},
			content: { 
				padding: raw.spacing.desktopGutterLess,
				backgroundColor: this.props.highlight ? '#CCCCCC' : '#FFFFFF'
			}
		}
	}
}