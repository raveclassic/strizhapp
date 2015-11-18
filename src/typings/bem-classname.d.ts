declare module 'bem-classname' {
	const bem:(block:string, ...args:Array<any>) => string;
	export = bem;
}