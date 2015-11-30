import JSData = require('js-data');
import {API_URL, adapter} from './Adapter';
import DSLocalStorageAdapter = require('js-data-localstorage');

export const DS = new JSData.DS({
	basePath: API_URL,
	debug: false
});

//DS.registerAdapter('http', adapter, {
//	'default': true
//});

const lsAdapter = new DSLocalStorageAdapter();
DS.registerAdapter('localstorage', lsAdapter, {
	'default': true
});