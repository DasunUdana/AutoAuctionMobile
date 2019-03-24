import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehicalDetailViewPage } from './vehical-detail-view.page';

const routes: Routes = [
  {
    path: '',
    component: VehicalDetailViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehicalDetailViewPage]
})
export class VehicalDetailViewPageModule {}
