export class Vehical {
    index = 0;
    id = '0000';
    name = 'Waiting...';
    auctionId = '0000';
    sellerAucId = '0000';
    make = 'Waiting...';
    model = 'Waiting...';
    year = 'Waiting...';
    mileage = 'Waiting...';
    fuel = 'Waiting...';
    transmission = 'Waiting...';
    engine = 'Waiting...';
    condition = 'Waiting...';
    description = 'Waiting...';
    startingPrice = 'Waiting...';
    incrementAmount = 'Waiting...';
    renewedDate = 'Waiting...';
    auctionDate = 'Waiting...';
    addedBy = 'Waiting...';
    approveStatus = 'Waiting...';
    actionLocation = 'Waiting...';
    locationMapUrl = 'Waiting...';
    maxFacility = 'Waiting...';
    formattedDate = 'Waiting...';
    remainDays = 'Waiting...';
    locationCity = 'Waiting...';
    img_url_1 = 'https://services.autoauction.lk/assets/img/logo.jpg';
    img_url_2 = 'https://services.autoauction.lk/assets/img/logo.jpg';
    img_url_3 = 'https://services.autoauction.lk/assets/img/logo.jpg';
    img_url_4 = 'https://services.autoauction.lk/assets/img/logo.jpg';

    setData (dataObj) {
        this.index = dataObj.count;
        this.id = dataObj._id;
        this.name = dataObj.make + ' ' + dataObj.model + ' ' + dataObj.year;
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
        this.startingPrice = this.numberWithCommas(dataObj.starting_price);
        this.incrementAmount = this.numberWithCommas(dataObj.increment_amount);
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

        const aucDateObj = new Date(this.auctionDate);
        const diffObj = this.convertMiliseconds(aucDateObj.getMilliseconds() - new Date().getMilliseconds(), '');
        this.remainDays = diffObj.d + 'd  ';
        this.formattedDate = [aucDateObj.getFullYear(), aucDateObj.getMonth(), aucDateObj.getDate()].join('-');

        this.locationCity = this.actionLocation.split(' ').pop();
    }

    convertMiliseconds (miliseconds, format) {
        let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

        total_seconds = parseInt(Math.floor(miliseconds / 1000).toString(), 10);
        total_minutes = parseInt(Math.floor(total_seconds / 60).toString(), 10);
        total_hours = parseInt(Math.floor(total_minutes / 60).toString(), 10);
        days = parseInt(Math.floor(total_hours / 24).toString(), 10);

        seconds = parseInt((total_seconds % 60).toString(), 10);
        minutes = parseInt((total_minutes % 60).toString(), 10);
        hours = parseInt((total_hours % 24).toString(), 10);

        switch (format) {
            case 's':
                return total_seconds;
                break;
            case 'm':
                return total_minutes;
                break;
            case 'h':
                return total_hours;
                break;
            case 'd':
                return days;
                break;
            default:
                return { d: days, h: hours, m: minutes, s: seconds };
        }
    }

    numberWithCommas (x) {
        const full_amount = (parseFloat(x) * 100000);
        const parts = full_amount.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
}
