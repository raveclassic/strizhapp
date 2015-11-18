declare module 'node-waves' {
	module Waves {
		export const ripple: (elements:Element|Array<Element>, options?:Object) => void;
		export const attach: (elements:Element|Array<Element>, classes?:string|Array<string>) => void;
	}
	export = Waves;
}