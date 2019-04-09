import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { ConnectLivePage } from './connect-live.page';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ConnectLivePage, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnectLivePage]
})
export class ConnectLivePageModule {}
