import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IUser extends IEntity {
	id?: number;
	phone: number;
	first_name?: string;
	last_name?: string;
	auth_key?: number;
	password_hash?: number;
	password_reset_token?: number;
	password?: number;
	role?: number;
	status?: number;
	temp_password?: number;
	send_email?: number;
	send_push?: number;
	send_sm?: number;
}

export const User = DS.defineResource<IUser>('user');