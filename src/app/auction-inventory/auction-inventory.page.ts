import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {VehicalDetailViewPage} from '../vehical-detail-view/vehical-detail-view.page';
import {AppServiceService} from '../app-service.service';
import {Vehical} from '../vehicle';

@Component({
    selector: 'app-auction-inventory',
    templateUrl: './auction-inventory.page.html',
    styleUrls: ['./auction-inventory.page.scss'],
})
export class AuctionInventoryPage implements OnInit {
    isLoaded = false;
    dummyArray = new Array(10);
    vehicleList: Vehical[] = [];
    contentArray: Vehical[] = [];

    constructor(public modalController: ModalController, private service: AppServiceService) {
    }

    async presentModal(data) {
        const modal = await this.modalController.create({
            component: VehicalDetailViewPage,
            componentProps: {vehicleObj: data, vehicleList: this.vehicleList}
        });

        return await modal.present();
    }

    ngOnInit() {
        this.service.getAuctionList().then(data => {
            let count = 0;
            const inventoryArray = JSON.parse(data.data).inventory;

            inventoryArray.forEach((element) => {
                const vehicleObj = new Vehical();

                element.count = count;
                vehicleObj.setData(element);
                this.vehicleList.push(vehicleObj);
                count++;
            });

            this.contentArray = this.vehicleList;
            this.isLoaded = true;
        });

        const searchbar = document.querySelector('ion-searchbar');
        searchbar.addEventListener('ionChange', this.handleInput.bind(this));
    }

    handleInput (event) {
        const searchKey = event.target.value.toLowerCase();
        this.contentArray = [];

        this.vehicleList.forEach(item => {
            if (item.model.toLowerCase().indexOf(searchKey) > -1 || item.make.toLowerCase().indexOf(searchKey) > -1) {
                this.contentArray.push(item);
            }
        });

        if (searchKey === '') {
            this.contentArray = this.vehicleList;
        }
    }
}
