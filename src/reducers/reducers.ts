import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';
import {ActionType, IAction} from '../actions/actions';
import {IPayloadSignin} from '../actions/signin';
import {IPayloadSigninSuccess} from "../actions/signin";

export interface IAppState {
	authorized?: boolean;
	login?: string;
	sid?: string;
}

export interface IState {
	app: IAppState;
	router?: any;
}

function app(state:IAppState, action:IAction<any>) {
	switch (action.type) {
		case ActionType.SIGNIN_SUCCESS:
			const payload = action.payload as IPayloadSigninSuccess;
			return Object.assign({}, state, {
				login: payload.login,
				sid: payload.sid,
				authorized: true
			});
		default:
			return state || {};
	}
}

export const root = combineReducers({
	app: app,
	router: routerStateReducer
});