import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

  }

}
