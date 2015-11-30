import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IImage extends IEntity {
	id?: number;
	title: string;
	url: string;
	path: string;
	user_id: number;
}

export const Image = DS.defineResource<IImage>('image');