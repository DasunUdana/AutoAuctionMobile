import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vehical-detail-view',
  templateUrl: './vehical-detail-view.page.html',
  styleUrls: ['./vehical-detail-view.page.scss'],
})
export class VehicalDetailViewPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dissmiss () {
    this.modalController.dismiss();
  }

}
