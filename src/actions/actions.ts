export enum ActionType {
	SIGNIN = <any>'SIGNIN',
	SIGNIN_SUCCESS = <any>'SIGNIN_SUCCESS',
	SIGNIN_ERROR = <any>'SIGNIN_ERROR',

	SIGNOUT = <any>'SIGNOUT',
	SIGNOUT_SUCCESS = <any>'SIGNOUT_SUCCESS',

	SHOW_GLOBAL_ERROR = <any>'SHOW_GLOBAL_ERROR',

	APP_LOADED = <any>'APP_LOADED'
}

export interface IAction<T> {
	type: ActionType;
	payload: T;
}

export type ThunkAction = (dispatch:(action:IAction<any>) => any) => void;