import * as React from 'react';
import Avatar = require('material-ui/lib/avatar');
import Radium = require('radium');

import {theme} from '../../theme/theme';

interface IFeedItemHeaderProps {
	firstName:string;
	lastName:string;
	date:Date;
}

const styles = {
	base: {
		display: 'flex',
		alignItems: 'center',
		padding: `9px 11px`,
		color: theme.palette.textColor
	},
	avatar: {
		height: '30px',
		width: '30px',
		lineHeight: '30px',
		fontSize: '14px',
		flexShrink: 0,
		backgroundColor: theme.palette.accent1Color
	},
	author: {
		marginLeft: '12px',
		marginRight: '12px',
		fontSize: '12px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	date: {
		marginLeft: 'auto',
		flexShrink: 0,
		fontSize: '11px',
		marginRight: '4px'
	}
};

@Radium
export class FeedItemHeader extends React.Component<IFeedItemHeaderProps, any> {
	render() {
		return (
			<div style={styles.base}>
				<Avatar style={styles.avatar}>
					{this.avatar}
				</Avatar>
				<div style={styles.author}>
					{this.author}
				</div>
				<div style={styles.date}>
					{this.date}
				</div>
			</div>
		);
	}

	get author():string {
		return `${this.props.firstName} ${this.props.lastName}`;
	}

	get date():string {
		return this.props.date.toDateString();
	}

	get avatar():string {
		return `${this.props.firstName.charAt(0)}${this.props.lastName.charAt(0)}`;
	}
}