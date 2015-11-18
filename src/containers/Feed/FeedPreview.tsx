import * as React from 'react';
import {theme, Mixins} from '../../theme/theme';

interface IFeedPreviewProps {
	image?:string;
	title:string;
}

export class FeedPreview extends React.Component<IFeedPreviewProps, any> {
	render() {
		const styles = this.styles;
		return (
			<div style={styles.base}>
				<h2 style={styles.title}>
					{this.props.title}
				</h2>
			</div>
		);
	}

	get styles():any {
		const image = this.props.image;
		return {
			base: {
				height: '73px',
				display: 'flex',
				alignItems: 'center',
				padding: '14px',
				background: image ? `url('${image}') no-repeat` : theme.palette.accent1Color,
				backgroundSize: 'cover'
			},
			title: Object.assign({},
				{
					fontWeight: 'bold',
					margin: 0,
					fontSize: '16px',
					color: theme.palette.accent2Color
				},
				Mixins.ellipsis
			)
		};
	}
}