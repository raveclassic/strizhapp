declare module 'js-data-localstorage' {
	import JSData = require('js-data');
	interface IDSLocalStorageAdapter extends JSData.IDSAdapter {
		new(): IDSLocalStorageAdapter;
	}
	const DSLocalStorageAdapter:IDSLocalStorageAdapter;
	export = DSLocalStorageAdapter;
}