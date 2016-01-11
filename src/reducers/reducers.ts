import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux';
import {ActionType, IAction} from '../actions/actions';
import {IUser} from "../models/User";
import {IPayloadGlobalError} from "../actions/app";
import {reducer as formReducer} from 'redux-form';

export interface IUIState {
	isLeftNavOpen?: boolean;
}

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
	ui: IUIState;
}

function auth(state:IAuthState, action:IAction<any>) {
	switch (action.type) {
		case ActionType.SIGNIN:
		case ActionType.SIGNOUT:
			return {
				processing: true
			};
		case ActionType.SIGNIN_SUCCESS:
			return {
				authorized: true
			};
		case ActionType.SIGNOUT_SUCCESS:
			return {
				authorized: false
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

function isLeftNavOpen(open:boolean, action:IAction<boolean>) {
	switch (action.type) {
		case ActionType.TOGGLE_LEFT_NAV:
			return typeof action.payload === 'undefined' ? !open : action.payload;
		default:
			return open || false;
	}
}

export const root = combineReducers({
	app: combineReducers({
		auth,
		loaded,
		error
	}),
	router: routerStateReducer,
	ui: combineReducers({
		isLeftNavOpen
	}),
	form: formReducer
});