import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

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
  isUserLoggedIn: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.authService.checkLogin().then(() => {
      this.isUserLoggedIn = true;
    })
    .catch(() => {
      this.isUserLoggedIn = false;
    });
  }

  logout() {
    if (this.isUserLoggedIn) {
      this.authService.logoutAuthenticate(false);
    } else {
      this.router.navigate(['login']);
    }
  }


}
