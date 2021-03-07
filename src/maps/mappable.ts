export interface mappable{
    location: {
        lat: number;
        long: number;
    };
    markerContent():string
}