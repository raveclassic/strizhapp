import JSData = require('js-data');
import DSHttpAdapter = require('js-data-http');
import qs = require('qs');
import JSDataPromise = JSData.JSDataPromise;
import DSHttpAdapterPromiseResolveType = JSData.DSHttpAdapterPromiseResolveType;
import {IResponse} from "./IResponse";
import DSHttpAdapterOptions = JSData.DSHttpAdapterOptions;
require('whatwg-fetch');

export const API_URL = 'https://strizhapi.herokuapp.com/api/v1/';

interface IHTTPOPtions {
	method: string;
	params?: Object;
	suffix?: string;
	url: string;
	urlOverride?: boolean;
}

export class HttpAdapter extends DSHttpAdapter {
	constructor(options?:DSHttpAdapterOptions) {
		super(options);
	}
	HTTP(options?:IHTTPOPtions):JSDataPromise<DSHttpAdapterPromiseResolveType> {
		let url = options.url;
		if (options.params) {
			url = buildUrl(url, options.params);
			delete options['params'];
		}
		return fetch(url, {
			method: options.method,
			credentials: 'include'
		}).then(response => response.json()) as any;
	}

	get(url:string, query:any) {
		url = buildUrl(API_URL + url, query);
		return this.GET(url).then(deserialize);
	}

	post(url:string, data:any) {
		return this.POST(API_URL + url, data).then(deserialize);
	}

	put(url:string, data:any) {
		return this.PUT(API_URL + url, data).then(deserialize);
	}

	del(url:string) {
		return this.DEL(API_URL + url).then(deserialize);
	}
}

export const adapter = new HttpAdapter({
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

function buildUrl(url:string, query:Object):string {
	if (url.substr(-1) !== '?') {
		url += '?';
	}
	if (query) {
		url += qs.stringify(query);
	}
	return url;
}
