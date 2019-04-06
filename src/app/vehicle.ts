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
        this.id = dataObj._id ? dataObj._id : '0000';
        this.name = dataObj.make ? dataObj.make + ' ' + dataObj.model : 'Waiting...';
        this.auctionId = dataObj.auctionid ? dataObj.auctionid : '0000';
        this.sellerAucId = dataObj.selleraucid ? dataObj.selleraucid : '0000';
        this.make = dataObj.make ? dataObj.make : 'Waiting...';
        this.model = dataObj.model ? dataObj.model : 'Waiting...';
        this.year = dataObj.year ? dataObj.year : 'Waiting...';
        this.mileage = dataObj.mileage ? dataObj.mileage : 'Waiting...';
        this.fuel = dataObj.fuel ? dataObj.fuel : 'Waiting...';
        this.transmission = dataObj.transmission ? dataObj.transmission : 'Waiting...';
        this.engine = dataObj.engine ? dataObj.engine : 'Waiting...';
        this.condition = dataObj.condition ? dataObj.condition : 'Waiting...';
        this.description = dataObj.description ? dataObj.description : 'Waiting...';
        this.startingPrice = dataObj.starting_price ? dataObj.starting_price : 'Waiting...';
        this.incrementAmount = dataObj.increment_amount ? dataObj.increment_amount : 'Waiting...';
        this.renewedDate = dataObj.renewed_date ? dataObj.renewed_date : 'Waiting...';
        this.auctionDate = dataObj.auction_date ? dataObj.auction_date : 'Waiting...';
        this.addedBy = dataObj.addedby ? dataObj.addedby : 'Waiting...';
        this.approveStatus = dataObj.approve_status ? dataObj.approve_status : 'Waiting...';
        this.actionLocation = dataObj.auction_location ? dataObj.auction_location : 'Waiting...';
        this.locationMapUrl = dataObj.locationmap_url ? dataObj.locationmap_url : 'Waiting...';
        this.maxFacility = dataObj.max_facility ? dataObj.max_facility : 'Waiting...';
        this.img_url_1 =  dataObj.img_url_1 ? 'https://services.autoauction.lk' + dataObj.img_url_1 : 'https://services.autoauction.lk/assets/img/logo.jpg';
        this.img_url_2 =  dataObj.img_url_2 ? 'https://services.autoauction.lk' + dataObj.img_url_2 : 'https://services.autoauction.lk/assets/img/logo.jpg';
        this.img_url_3 =  dataObj.img_url_3 ? 'https://services.autoauction.lk' + dataObj.img_url_3 : 'https://services.autoauction.lk/assets/img/logo.jpg';
        this.img_url_4 =  dataObj.img_url_4 ? 'https://services.autoauction.lk' + dataObj.img_url_4 : 'https://services.autoauction.lk/assets/img/logo.jpg';
    }
}
