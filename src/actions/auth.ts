import {ActionType, IAction, ThunkAction} from './actions';
import {client} from '../api/Client';
import {pushState} from 'redux-router';
import {showGlobalError, appLoaded} from './app';
import {IResponse} from "../api/IResponse";

export interface IPayloadSigninSuccess {
	sid:string;
	login:string;
}

export function signinSuccess(sid:string, login:string):IAction<IPayloadSigninSuccess> {
	return {
		type: ActionType.SIGNIN_SUCCESS,
		payload: {
			sid,
			login
		}
	};
}

export interface IPayloadSigninError {
	error:Object;
}

export function signinError(error:Object):IAction<IPayloadSigninError> {
	return {
		type: ActionType.SIGNIN_ERROR,
		payload: {
			error
		}
	};
}

export function signingRequest():IAction<void> {
	return {
		type: ActionType.SIGNIN,
		payload: void 0
	};
}

export interface IPayloadSignin {
	login:string;
	password:string;
}

export function signin(login:string, password:string, redirect:string = '/'):ThunkAction {
	return dispatch => {
		const request = {
			phone: login,
			password: password,
			platform: 1
		};
		dispatch(signingRequest());
		return client.post('auth', request)
			.then((response:IResponse<any>) => {
				dispatch(signinSuccess(response.data.sid, login));
				dispatch(pushState(null, redirect));
			})
			.catch(error => {
				dispatch(showGlobalError(error));
			});
	};
}

export function checkAuth():ThunkAction {
	return dispatch => {
		return client.get('auth')
			.then((response:IResponse<any>) => {
				if (response.data.sid) {
					dispatch(signinSuccess(response.data.sid, ''));
					dispatch(pushState(null, '/'));
				}
			})
			.catch(error => {
				dispatch(showGlobalError(error));
			})
			.then(() => {
				dispatch(appLoaded());
			});
	};
}

export function signoutSuccess():IAction<void> {
	return {
		type: ActionType.SIGNOUT_SUCCESS,
		payload: void 0
	};
}

export function signoutRequest():IAction<void> {
	return {
		type: ActionType.SIGNOUT,
		payload: void 0
	};
}

export function signout():ThunkAction {
	return dispatch => {
		return client.del('auth')
			.then(() => {
				dispatch(signoutSuccess());
				dispatch(pushState(null, '/'));
			})
			.catch(error => {
				dispatch(showGlobalError(error));
			});
	};
}