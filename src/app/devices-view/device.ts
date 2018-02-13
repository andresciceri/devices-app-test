import {Media} from './media';

export class Device {
	_id: string;
    hwId: string;
    name: string;
    media: Media;
    state: string;
    type: string;
    config: any;
    createdAt: Date;
	updatedAt: Date;

    constructor(){        
    }
}