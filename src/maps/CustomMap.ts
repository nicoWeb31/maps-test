
import { mappable} from './mappable';
export class CustomMap {
    private googleMap: google.maps.Map;
    divMap: HTMLElement;

    constructor(divId: string) {
        this.divMap = document.getElementById(divId); 
        this.googleMap = new google.maps.Map(this.divMap, {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
        ;
    }


    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: { lat: user.location.lat, lng: user.location.long },
    //     })
    // }


    // addMarkerCompagny(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: { lat: company.location.lat, lng: company.location.long },
    //     })
    // }


    //my methode 
    addMarker(marker: mappable ): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: { lat: marker.location.lat, lng: marker.location.long },
        })
    }



}
