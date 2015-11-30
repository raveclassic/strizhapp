import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IEmail extends IEntity {
	id?: number;
	from: string;
	to: string;
	subject: string;
	body: string;
}

export const Email = DS.defineResource<IEmail>('email');