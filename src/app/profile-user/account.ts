import {Setting} from './setting';
import {Plan} from './plan';

export class Account {
	_id: string;
    updatedAt: Date;
    createdAt: Date;
    name: string;
    companyId: string;
    clientId: string;
    clientType: string;
    settings: Setting;
    externalAccounts: any [];
    plan: Plan;
    type: string;

    constructor (){}
}
