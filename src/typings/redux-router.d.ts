declare module 'redux-router' {
	export const pushState:(...args:Array<any>) => any;
	export interface ILocation {
		pathname:string;
		state: Object;
	}
	export const routerStateReducer:(...args:Array<any>) => any;
}