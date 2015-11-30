import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export interface IDevice extends IEntity {
	id?: number;
	user_id: number;
	token: string;
	type: number;
	session_id?: number;
	device_id?: number;
}

export const Device = DS.defineResource<IDevice>('device');