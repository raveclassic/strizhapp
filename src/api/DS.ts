import JSData = require('js-data');
import {API_URL, adapter} from './Adapter';

export const DS = new JSData.DS({
	basePath: API_URL,
	debug: false
});

DS.registerAdapter('http', adapter, {
	'default': true
});