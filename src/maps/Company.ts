import faker from 'faker';

export class Company {

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