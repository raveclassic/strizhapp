import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IContactGroup extends IEntity {
	id?: number;
	title: string;
	user_id: number;
	contact_count?: number;
}

export const ContactGroup = DS.defineResource<IContactGroup>('contact-group');