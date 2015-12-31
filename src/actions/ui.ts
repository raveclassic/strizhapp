import {ActionType, IAction, ThunkAction} from './actions';

export function toggleLeftNav(open?:boolean):IAction<boolean> {
	return {
		type: ActionType.TOGGLE_LEFT_NAV,
		payload: open
	};
}