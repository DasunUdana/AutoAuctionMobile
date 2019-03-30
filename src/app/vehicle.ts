export class Vehical {
    id: string;
    name: string;
    auctionId: string;
    sellerAucId: string;
    make: string;
    model: string;
    year: string;
    mileage: string;
    fuel: string;
    transmission: string;
    engine: string;
    condition: string;
    description: string;
    startingPrice: string;
    incrementAmount: string;
    renewedDate: string;
    auctionDate: string;
    addedBy: string;
    approveStatus: string;
    actionLocation: string;
    locationMapUrl: string;
    maxFacility: string;
    img_url_1: string;
    img_url_2: string;
    img_url_3: string;
    img_url_4: string;

    setData (dataObj) {
        this.id = dataObj._id;
        this.name = dataObj.make + ' ' + dataObj.model;
        this.auctionId = dataObj.auctionid;
        this.sellerAucId = dataObj.selleraucid;
        this.make = dataObj.make;
        this.model = dataObj.model;
        this.year = dataObj.year;
        this.mileage = dataObj.mileage;
        this.fuel = dataObj.fuel;
        this.transmission = dataObj.transmission;
        this.engine = dataObj.engine;
        this.condition = dataObj.condition;
        this.description = dataObj.description;
        this.startingPrice = dataObj.starting_price;
        this.incrementAmount = dataObj.increment_amount;
        this.renewedDate = dataObj.renewed_date;
        this.auctionDate = dataObj.auction_date;
        this.addedBy = dataObj.addedby;
        this.approveStatus = dataObj.approve_status;
        this.actionLocation = dataObj.auction_location;
        this.locationMapUrl = dataObj.locationmap_url;
        this.maxFacility = dataObj.max_facility;
        this.img_url_1 = 'https://services.autoauction.lk' + dataObj.img_url_1;
        this.img_url_2 = 'https://services.autoauction.lk' + dataObj.img_url_2;
        this.img_url_3 = 'https://services.autoauction.lk' + dataObj.img_url_3;
        this.img_url_4 = 'https://services.autoauction.lk' + dataObj.img_url_4;
    }
}
