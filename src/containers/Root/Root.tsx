import React = require('react');
import Store = Redux.Store;
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import {routes} from '../../routes';

interface IRootProps {
	store: Store;
}

export class Root extends React.Component<IRootProps, any> {
	render() {
		return (
			<Provider store={this.props.store}>
				<ReduxRouter>
					{routes}
				</ReduxRouter>
			</Provider>
		);
	}
}