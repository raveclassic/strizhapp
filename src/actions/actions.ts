export enum ActionType {
	SIGNIN = <any>'SIGNIN',
	SIGNIN_SUCCESS = <any>'SIGNIN_SUCCESS'
}

export interface IAction<T> {
	type: ActionType;
	payload: T;
}

export type ThunkAction = (dispatch:(action:IAction<any>) => any) => void;