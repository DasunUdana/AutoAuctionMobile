import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuctionShedulesPage } from './auction-shedules.page';

const routes: Routes = [
  {
    path: '',
    component: AuctionShedulesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuctionShedulesPage]
})
export class AuctionShedulesPageModule {}
