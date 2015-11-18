import * as React from 'react';
import Avatar = require('material-ui/lib/avatar');
import FontIcon = require('material-ui/lib/font-icon');
import DeviceAccessTime = require('material-ui/lib/svg-icons/device/access-time');
import CommunicationLocationOn = require('material-ui/lib/svg-icons/communication/location-on');
import EditorAttachMoney = require('material-ui/lib/svg-icons/editor/attach-money');

import {FeedItemHeader} from './FeedItemHeader';
import {FeedPreview} from './FeedPreview';

import {theme, Mixins} from '../../theme/theme';

interface IFeedItemProps extends React.Props<FeedItem> {
	highlight:boolean;
}

/*tslint:disable max-line-length*/
const image = 'http://2.bp.blogspot.com/_UdH8rcs3s1Q/TGdcZB6sO3I/AAAAAAAAAKU/KrPuD_wmBC4/s320/iPadBackgroundTexture-grey.png';

const styles:any = {
	info: {
		padding: '14px 7px',
		backgroundColor: '#F1F5F7',
		color: theme.palette.textColor
	},
	description: {
		margin: 0,
		fontSize: '12px',
		padding: '0 7px',
		marginBottom: '14px'
	},
	fields: {
		listStyle: 'none',
		padding: '7px',
		backgroundColor: '#FFFFFF',
		margin: 0,
		fontSize: '12px',
		marginBottom: '20px',
		borderRadius: '2px'
	},
	field: Object.assign({},
		{
			padding: '3px 0'
		},
		Mixins.ellipsis
	),
	icon: {
		height: '12px',
		width: '12px',
		marginRight: '5px',
		verticalAlign: 'top'
	}
};

export class FeedItem extends React.Component<IFeedItemProps, any> {
	render() {
		return (
			<div style={styles.base}>
				<FeedItemHeader firstName="Надежда" lastName="Смирнова" date={new Date()}/>
				<FeedPreview title="Квартира в Сокольниках" image={image}/>
				<div style={styles.info}>
					<p style={styles.description}>
						Продается квартира. Новый дом. 4 комнаты. Туалет, Душ. Вид на Неву. Метро рядом.
						Продается квартира. Новый дом. 4 комнаты. Туалет, Душ. Вид на Неву. Метро рядом.
					</p>
					<ul style={styles.fields}>
						<li style={styles.field}>
							<DeviceAccessTime style={styles.icon}/>
							25.09-2015 - 25.10.2015
						</li>
						<li style={styles.field}>
							<CommunicationLocationOn style={styles.icon}/>
							Санкт-Петербург
						</li>
						<li style={styles.field}>
							<EditorAttachMoney style={styles.icon}/>
							2 400 000 руб.
						</li>
					</ul>
				</div>

			</div>
		);
	}
}