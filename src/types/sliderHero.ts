export interface SliderHero{
    _id: string
    name: string,
    location: {
        ownerDescription: string,
        street: string,
        neighbor: string,
        number: number,
        zip: number,
        city: string,
        mapCoordinates: string,
    },
    propertyImages: string[],
    description: string,
    amenities: {
            wifi: boolean,
            parking: boolean,
            airConditioner: boolean,
            reception: boolean,
            petFriendly: boolean,
            cleanService: boolean 
    },
    rates: number[],
    score: number,
    price: number,
    noAvailability: string[],
    owner: string,
    measurements: {
        long: number,
        width: number,
        area: number
    },
    workTime: {
        open: string
        close: string
    },
    comments: string[]   
}