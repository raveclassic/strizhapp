import {ActionType} from './actions';

export interface IPayloadGlobalError {
	error?: Object;
}

export function showGlobalError(error?:Object) {
	return {
		type: ActionType.SHOW_GLOBAL_ERROR,
		payload: {
			error
		}
	};
}

export function appLoaded() {
	return {
		type: ActionType.APP_LOADED,
		payload: {}
	};
}