import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VehicalDetailViewPage } from '../vehical-detail-view/vehical-detail-view.page';

@Component({
  selector: 'app-auction-inventory',
  templateUrl: './auction-inventory.page.html',
  styleUrls: ['./auction-inventory.page.scss'],
})
export class AuctionInventoryPage implements OnInit {
  vehicalList: { id: number, name: string, description: string, price: number, milage: number, img: string, capacity: number }[] = [
    { "id": 0, "name": "Toyota Aqua", "description": "ffffffffffffffff", "price": 5500000, "milage": 35000, "img": "assets/vehical1.png", "capacity": 1500 },
    { "id": 1, "name": "Mazda RX8", "description": "hhhhhhhhhhhhhhhhh", "price": 5500000, "milage": 25000, "img": "assets/vehical3.png" , "capacity": 1600 },
    { "id": 2, "name": "BMW I8", "description": "gggggggggg", "price": 5500000, "milage": 50000, "img": "assets/vehical2.png" , "capacity": 1000 },
    { "id": 3, "name": "Mazda RX8", "description": "hhhhhhhhhhhhhhhhh", "price": 5500000, "milage": 25000, "img": "assets/vehical3.png" , "capacity": 1600 }
  ];

  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VehicalDetailViewPage
    });

    return await modal.present();
  }

  ngOnInit() {

  }

}
