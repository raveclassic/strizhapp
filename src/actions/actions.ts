export enum ActionType {
	AUTHORIZE
}

export interface IAction<T> {
	type: ActionType;
	payload: T;
}