import faker from "faker";
import { mappable } from "./mappable";
export class User implements mappable {
    name: string;
    location: {
        lat: number;
        long: number;
    };

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return "User Name : " + this.name;
    }
}
