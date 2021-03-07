import faker from 'faker';
import { mappable } from './mappable';

export class Company  implements mappable{

    compagnyName: string;
    catchPhrase: string;
    location:{
        lat: number;
        long: number;
    }

    constructor() {
        this.compagnyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude())
        }
    }




}