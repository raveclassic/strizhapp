import qs = require('qs');
import 'whatwg-fetch';

export const API_URL = 'https://strizhapi.herokuapp.com/api/v1/';

export interface IRequestOptions {
	method:HTTPMethod;
	url:string;
	query?:Object;
	data?:Object;
}

export enum HTTPMethod {
	GET = <any>'GET',
	POST = <any>'POST',
	PUT = <any>'PUT',
	DELETE = <any>'DELETE'
}

export class Client {
	private _baseUrl:string;

	constructor(baseUrl:string) {
		this._baseUrl = baseUrl;
		if (this._baseUrl[this._baseUrl.length - 1] === '/') {
			this._baseUrl = this._baseUrl.substring(0, this._baseUrl.length - 1);
		}
	}

	request<T>(options:IRequestOptions):Promise<T> {
		const url = this._baseUrl + '/' + buildUrl(options.url, options.query);
		const requestOptions:RequestInit = {
			method: <any>options.method,
			credentials: 'include'
		};
		if (options.data) {
			requestOptions.body = JSON.stringify(options.data);
		}
		return fetch(url, requestOptions).then(response => response.json()) as Promise<T>;
	}

	get(path:string, query?:Object) {
		return this.request({
			method: HTTPMethod.GET,
			url: path,
			query
		});
	}

	post(path:string, data?:Object) {
		return this.request({
			method: HTTPMethod.POST,
			url: path,
			data
		});
	}

	put(path:string, data?:Object) {
		return this.request({
			method: HTTPMethod.PUT,
			url: path,
			data
		});
	}

	['delete'](path:string) {
		return this.request({
			method: HTTPMethod.DELETE,
			url: path
		});
	}
}

export const client = new Client(API_URL);

function buildUrl(url:string, query?:Object):string {
	if (query) {
		if (url.substr(-1) !== '?') {
			url += '?';
		}
		url += qs.stringify(query);
	}
	return url;
}