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
    vehicleList: Vehical[] = [];

    constructor(public modalController: ModalController, private service: AppServiceService) {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: VehicalDetailViewPage
        });

        return await modal.present();
    }

    ngOnInit() {
        this.service.getAuctionList().then(data => {
            const inveltoryArray = JSON.parse(data.data).inventory;

            inveltoryArray.forEach((element) => {
                const vehicleObj = new Vehical();
                vehicleObj.setData(element);
                this.vehicleList.push(vehicleObj);
            });
        });
    }
}
