import { User } from "./maps/User";
import { Company } from "./maps/Company";
console.log("testxw");

// const user = new User();
// console.log(user)

// const company = new Company();
// console.log(company);

const divMap = document.getElementById("map");

const maps = new google.maps.Map(divMap, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
});
