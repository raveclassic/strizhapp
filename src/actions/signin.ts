import {ActionType, IAction, ThunkAction} from './actions';
import {adapter} from '../api/Adapter';
import {pushState} from 'redux-router';

export interface IPayloadSigninSuccess {
	sid: string;
	login: string;
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

export interface IPayloadSignin {
	login: string;
	password: string;
}

export function signin(login:string, password:string, redirect:string = '/'):ThunkAction {
	return dispatch => {
		dispatch(signinSuccess('sidsfsjdfhauskjf', '43764826734'));
		dispatch(pushState(null, redirect));
	};
}