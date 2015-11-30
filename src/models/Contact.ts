import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IContact extends IEntity {
	id?: number;
	phone: string;
	user_id: number;
	first_name: number;
	last_name?: number;
	contact_group_id: number;
	contact_user_id?: number;
	is_registered?: boolean;
}

export const Contact = DS.defineResource<IContact>('contact');