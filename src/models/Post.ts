import {DS} from '../api/DS';
import {IUser} from './User';

export interface IPost {
	author: IUser;
	created_at: Date;
}

export const Post = DS.defineResource<IPost>('post');