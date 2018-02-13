import {DataUser} from './data-user';

export class AccessData {
	access_token: string;
    token_type: string;
    expires_in: number;
    data: DataUser;
    refresh_token: string;

    constructor(){}
}
