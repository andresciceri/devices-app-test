import {Account} from './account';
import {Profile} from './profile';

export class User {
	cognitoIdentityId: string;
    _id: string;
    updatedAt: Date;
    createdAt: Date;
    username: string;
    accounts: Account[];
    profile: Profile;

    constructor(){}
}
