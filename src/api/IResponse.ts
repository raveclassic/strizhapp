export interface IResponse<T> {
	data: T;
	status: number;
	user_id?: number;
}