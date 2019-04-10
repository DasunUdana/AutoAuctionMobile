import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Vehical } from '../vehicle';
import { ToastController } from '@ionic/angular';

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

  constructor(public modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() {
    this.vehicleCount = this.vehicleList.length;
  }

  dissmiss () {
    this.modalController.dismiss();
  }

  nextVehi () {
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

  previousVehi () {
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

  async showToastMsg (msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
