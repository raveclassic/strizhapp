import JSData = require('js-data');
import {API_URL, HttpAdapter} from './Adapter';

export const DS = new JSData.DS({
	basePath: API_URL,
	debug: false
});

DS.registerAdapter('http', HttpAdapter, {
	'default': true
});