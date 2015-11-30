import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IFeed extends IEntity {
	id?: number;
	user_id: number;
	post_ids?: number;
}

export const Feed = DS.defineResource<IFeed>('feed');