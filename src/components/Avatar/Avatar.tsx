import React = require('react');
import bem from '../../util/bem';

import './Avatar.scss';
import './Avatar.theme.scss';

interface IAvatarProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	src?: string;
}

export class Avatar extends React.Component<IAvatarProps, any> {
	render() {
		return (
			<div className={bem('avatar')}></div>
		);
	}
}