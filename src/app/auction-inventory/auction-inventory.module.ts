import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuctionInventoryPage } from './auction-inventory.page';
import { VehicalDetailViewPage } from '../vehical-detail-view/vehical-detail-view.page';

const routes: Routes = [
  {
    path: '',
    component: AuctionInventoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuctionInventoryPage, VehicalDetailViewPage],
  entryComponents: [VehicalDetailViewPage]
})
export class AuctionInventoryPageModule {}
