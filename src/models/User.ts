import {DS} from '../api/DS';

export interface IUser {
	first_name: string;
	last_name: string;
	avatar: string;
}

export const User = DS.defineResource<IUser>('user');