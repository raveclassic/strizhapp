import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IPost extends IEntity {
	id?: number;
	title: string;
	user_id: number;
	description?: string;
	image_ids?: number;
	price?: string;
	expiration_date?: Date;
	is_profitable?: boolean;
	contact_ids?: Array;
	contact_group_ids?: Array;
}

export const Post = DS.defineResource<IPost>('post');