declare module 'redux-form' {
	export const reduxForm: (options:Object) => (component:any) => any;
	export const reducer:(...args:Array<any>) => any;
}