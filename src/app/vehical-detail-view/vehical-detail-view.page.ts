import {Component, OnInit, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Vehical} from '../vehicle';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import {AppServiceService} from '../app-service.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-vehical-detail-view',
    templateUrl: './vehical-detail-view.page.html',
    styleUrls: ['./vehical-detail-view.page.scss'],
})
export class VehicalDetailViewPage implements OnInit {
    vehicleObj: Vehical;
    vehicleList: Vehical[];
    vehicleCount: number;

    isPreviousDisable = true;
    isNextDisable = false;

    constructor(public modalController: ModalController,
                public toastController: ToastController,
                public alertController: AlertController,
                public service: AppServiceService,
                private authService: AuthenticationService) {
    }

    ngOnInit() {
        this.vehicleCount = this.vehicleList.length;
    }

    dissmiss() {
        this.modalController.dismiss();
    }

    nextVehi() {
        const currentObj = this.vehicleObj;
        const nextIndex = currentObj.index + 1 < this.vehicleList.length ? currentObj.index + 1 : currentObj.index;

        if (currentObj.index + 1 === this.vehicleList.length - 1) {
            this.isNextDisable = true;
        }

        this.vehicleObj = this.vehicleList[nextIndex];

        if (this.isPreviousDisable) {
            this.isPreviousDisable = false;
        }
    }

    previousVehi() {
        const currentObj = this.vehicleObj;
        const previousIndex = currentObj.index - 1 >= 0 ? currentObj.index - 1 : 0;

        if (currentObj.index - 1 === 0) {
            this.isPreviousDisable = true;
        }

        this.vehicleObj = this.vehicleList[previousIndex];

        if (this.isNextDisable) {
            this.isNextDisable = false;
        }
    }

    async showToastMsg(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    onPrebidClick () {
        this.authService.checkLogin().then(() => {
            this.presentPrebidAlert();
        })
        .catch(() => {
            this.presentLoginAlert();
        });
    }

    async presentPrebidAlert() {
        const alert = await this.alertController.create({
            header: 'Prebid Notification ',
            message: 'If you are unavailable to bid during the live auction, you can place a PreBid on items that have not yet come up for sale, and the system will bid for you. A PreBid allows you to define your maximum price for a vehicle before bidding begins, and the system will place bids for you up to your defined maximum',
            subHeader: 'Starting Price (LKR) : ' + this.vehicleObj.startingPrice,
            inputs: [
                {
                    name: 'BidAmount',
                    type: 'number',
                    placeholder: 'Maximum Bid Amount (LKR)'
                }
            ],
            buttons: [{text: 'Send My Bid', handler: this.sendMyBid.bind(this)}, {text: 'Cancel', role: 'cancel', cssClass: 'secondary'}]
        });

        return await alert.present();
    }

    sendMyBid (data) {
        const reqObj = {
            selleraucid: this.vehicleObj.sellerAucId,
            auction_id: this.vehicleObj.auctionId,
            starting_price: this.vehicleObj.startingPrice,
            max_bid: data.BidAmount
        };

        this.service.sendPrebid(reqObj)
            .then((response) => {
                console.error(response);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    async presentLoginAlert() {
        const alert = await this.alertController.create({
            header: 'Login',
            message: 'Please Login',
            inputs: [
                {
                    name: 'username',
                    type: 'text',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                }
            ],
            buttons: [{text: 'Login', handler: this.login.bind(this)}, {text: 'Cancel', role: 'cancel', cssClass: 'secondary'}]
        });

        return await alert.present();
    }

    login (dataObj) {
        const formObj = {
            username: dataObj.username,
            password: dataObj.password
        };

        this.authService.loginPassData(formObj).then(() => {
            this.presentPrebidAlert();
        })
        .catch((data) => {
            this.showToastMsg(data);
        });
    }

}
