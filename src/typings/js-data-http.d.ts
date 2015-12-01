///<reference path="../../typings/js-data/js-data.d.ts"/>

declare module __JSDataHTTP {
	import DSFilterParams = JSData.DSFilterParams;
	import IDSAdapter = JSData.IDSAdapter;

	export interface IDSHttpAdapterOptions {
		serialize?: (resourceName:string, data:any) => any;
		deserialize?: (resourceName:string, data:any) => any;
		queryTransform?: (resourceName:string, params:DSFilterParams) => any;
		httpConfig?: any;
		forceTrailingSlash?: boolean;
		log?: boolean | ((message?:any, ...optionalParams:any[]) => void);
		error?: boolean | ((message?:any, ...optionalParams:any[]) => void);
	}

	export interface IDSHttpAdapterPromiseResolveType {
		data: any;
		headers: any;
		status: number;
		config: any;
	}

	export interface IDSHttpAdapter extends IDSAdapter {

		new(options?:IDSHttpAdapterOptions):IDSHttpAdapter;

		// DSHttpAdapter uses axios so options are axios config objects.
		HTTP(options?:Object):Promise<IDSHttpAdapterPromiseResolveType>;
		DEL(url:string, data?:Object, options?:Object):Promise<IDSHttpAdapterPromiseResolveType>;
		GET(url:string, data?:Object, options?:Object):Promise<IDSHttpAdapterPromiseResolveType>;
		POST(url:string, data?:Object, options?:Object):Promise<IDSHttpAdapterPromiseResolveType>;
		PUT(url:string, data?:Object, options?:Object):Promise<IDSHttpAdapterPromiseResolveType>;
	}

	export const DSHttpAdapter:IDSHttpAdapter;
}

declare module 'js-data-http' {
	export = __JSDataHTTP.DSHttpAdapter;
}