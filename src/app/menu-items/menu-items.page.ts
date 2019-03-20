import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.page.html',
  styleUrls: ['./menu-items.page.scss'],
})
export class MenuItemsPage implements OnInit {
  public appPages = [
    {
      title: 'How To Bid',
      url: '/home',
      icon: 'car'
    },
    {
      title: 'Deposite Bank Information',
      url: '/password-reset',
      icon: 'cash'
    },
    {
      title: 'About Us',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Contact Us',
      url: '/home',
      icon: 'contacts'
    }

  ];


  email: any;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    // this.authService.getEmail().then((value) => {
    //   if(!value)
    //     this.authService.logoutAuthenticate();

    //   this.email = value;
    // }).catch(error => {
    //   console.log(error);
    //   this.authService.logoutAuthenticate();
    // });
  }

  logout() {
    this.authService.logoutAuthenticate();
  }


}