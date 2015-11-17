import {ActionType, IAction} from './actions';

export interface IPayloadAuthorize {
	login: string;
	password: string;
}

export function authorize(login:string, password:string):IAction<IPayloadAuthorize> {
	return {
		type: ActionType.AUTHORIZE,
		payload: {
			login,
			password
		}
	};
}