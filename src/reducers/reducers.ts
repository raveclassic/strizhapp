import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';
import {ActionType, IAction} from '../actions/actions';
import {IUser} from "../models/User";
import {IPayloadGlobalError} from "../actions/app";

export interface IAuthState {
	user?: IUser;
	authorized?: boolean;
	processing?: boolean;
}

export interface IAppState {
	auth: IAuthState;
	error?: Object;
}

export interface IState {
	app: IAppState;
	router?: any;
}

function auth(state:IAuthState, action:IAction<any>) {
	switch (action.type) {
		case ActionType.SIGNIN:
			return {
				processing: true
			};
		case ActionType.SIGNIN_SUCCESS:
			return {
				authorized: true
			};
		case ActionType.SHOW_GLOBAL_ERROR:
			return {};
		default:
			return state || {};
	}
}

function error(state:Object, action:IAction<IPayloadGlobalError>) {
	switch (action.type) {
		case ActionType.SHOW_GLOBAL_ERROR:
			return action.payload.error;
		default:
			return state || null;
	}
}

function loaded(loaded:boolean, action:IAction<void>) {
	switch (action.type) {
		case ActionType.APP_LOADED:
			return true;
		default:
			return loaded || false;
	}
}

export const root = combineReducers({
	app: combineReducers({
		auth,
		loaded,
		error
	}),
	router: routerStateReducer
});