declare module 'redux-router' {
	import React = require('react');
	export const pushState:(...args:Array<any>) => any;
	export interface ILocation {
		pathname:string;
		state: Object;
	}
	export const routerStateReducer:(...args:Array<any>) => any;
	export class ReduxRouter extends React.Component<any, any> {
	}
}