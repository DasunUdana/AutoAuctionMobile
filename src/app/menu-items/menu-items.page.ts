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
      title: 'How to Bid',
      url: '/how-to-bid',
      icon: 'car'
    },
    {
      title: 'Deposite Information',
      url: '/password-reset',
      icon: 'cash'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'people'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'contacts'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person'
    },
    {
      title: 'Sign In',
      url: '/login',
      icon: 'log-in'
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
