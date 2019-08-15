import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Events } from '@ionic/angular';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticateSuccess = false;
  rqstUrl = 'https://auction.autoauction.lk/users/signin_mob';

  constructor(private storage: Storage, private http: HTTP, private router: Router) {
  }

  getToken() {
    return this.storage.get('token');
  }

  getEmail() {
    return this.storage.get('email');
  }

  getIsAuthentication() {
    return this.storage.get('isAuthentication');
  }

  loginAuthenticate(username, isAuthentication, token) {
    this.storage.set('username', username);
    this.storage.set('isAuthentication', isAuthentication);
    this.storage.set('token', token);
  }

  logoutAuthenticate(isGoHome) {
    this.storage.set('username', '');
    this.storage.set('isAuthentication', false);
    this.storage.set('token', '');

    if (isGoHome) {
      this.router.navigate(['/menu-items']);
    } else {
      this.router.navigate(['login']);
    }
  }

  loginPassData (formObj) {
    return this.http.post(this.rqstUrl, formObj, {}).then((data) => {
      const res = JSON.parse(data.data);
      console.log(res);

      if (res.username === formObj.username) {
        this.loginAuthenticate(res.username, true, '');

        return Promise.resolve();
      }

      return Promise.reject();
    })
    .catch((data) => {
        return Promise.reject('Invalid Credentials');
    });
  }

  checkLogin (): any {
    return new Promise((resolve, reject) => {
      this.http.get('https://auction.autoauction.lk/rtmobile', {}, {}).then((data) => {
        const res = JSON.parse(data.data);

        this.storage.get('username').then((username) => {
          if (res.username === username) {
            resolve();
          } else {
            reject();
          }
        });
      })
      .catch((data) => {
        reject(data);
      });
    });
  }
}
