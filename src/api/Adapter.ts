import JSData = require('js-data');
import JSDataPromise = JSData.JSDataPromise;
import {IResponse} from "./IResponse";
import JSDataHttp = require('js-data-http');
import {client} from './Client';
import IDSHttpAdapterOptions = __JSDataHTTP.IDSHttpAdapterOptions;
import IDSHttpAdapterPromiseResolveType = __JSDataHTTP.IDSHttpAdapterPromiseResolveType;

export const API_URL = 'https://strizhapi.herokuapp.com/api/v1/';

interface IHTTPOPtions {
	method: string;
	params?: Object;
	suffix?: string;
	url: string;
	urlOverride?: boolean;
}

export class Adapter extends JSDataHttp {
	constructor(options?:IDSHttpAdapterOptions) {
		super(options);
	}

	HTTP(options?:IHTTPOPtions):Promise<IDSHttpAdapterPromiseResolveType> {
		return client.request<IDSHttpAdapterPromiseResolveType>({
			url: options.url,
			method: <any>options.method
		});
	}
}

export const adapter = new Adapter({
	deserialize(resourceConfig:any, data:IResponse<any>): any {
		if (data.data.items) {
			return data.data.items[resourceConfig.name];
		} else {
			return data.data;
		}
	}
});

function deserialize(data:any):any {
	return data.data.data;
}