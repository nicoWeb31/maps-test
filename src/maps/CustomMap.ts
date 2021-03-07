export class CustomMap {
    private googleMap: google.maps.Map;
    divMap: HTMLElement;

    constructor() {
        this.divMap = document.getElementById("map"); 
        this.googleMap = new google.maps.Map(this.divMap, {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
        ;
    }
}
