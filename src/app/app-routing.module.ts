import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu-items', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'menu-items', loadChildren: './menu-items/menu-items.module#MenuItemsPageModule' },
  { path: 'auction-shedules', loadChildren: './auction-shedules/auction-shedules.module#AuctionShedulesPageModule' },
  { path: 'qr-scanner', loadChildren: './qr-scanner/qr-scanner.module#QrScannerPageModule' },
  { path: 'auction-lane', loadChildren: './auction-lane/auction-lane.module#AuctionLanePageModule' },
  { path: 'connect-live', loadChildren: './connect-live/connect-live.module#ConnectLivePageModule' },
  { path: 'auction-home', loadChildren: './auction-home/auction-home.module#AuctionHomePageModule' },
  { path: 'auction-inventory', loadChildren: './auction-inventory/auction-inventory.module#AuctionInventoryPageModule' },
  { path: 'connect-live', loadChildren: './connect-live/connect-live.module#ConnectLivePageModule' },
  { path: 'vehical-detail-view', loadChildren: './vehical-detail-view/vehical-detail-view.module#VehicalDetailViewPageModule' },
  { path: '**', redirectTo: 'menu-items' },
 

  





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
