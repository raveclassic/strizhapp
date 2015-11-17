import {IUser} from './User';

export interface IPost {
	author: IUser;
	created_at: Date;
}