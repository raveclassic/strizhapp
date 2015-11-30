import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IComment extends IEntity {
	id?: number;
	advert_id: number;
	user_id: number;
	message: number;
}

export const Comment = DS.defineResource<IComment>('comment');