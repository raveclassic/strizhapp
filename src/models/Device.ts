import {DS} from '../api/DS';
import {IEntity} from "./IEntity";

export enum TDevice {
	UNKNOWN = <any>0,
	ANDROID = <any>1,
	IOS = <any>2,
	WINPHONE = <any>3
}

export interface IDevice extends IEntity {
	id?: number;
	user_id: number;
	token: string;
	type: number;
	session_id?: number;
	device_id?: number;
}

export const Device = DS.defineResource<IDevice>('device');