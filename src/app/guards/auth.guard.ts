import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authInfo: AuthenticationService) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise((resolve, reject) => {
            this.authInfo.checkLogin().then(() => {
                resolve(true);
            })
            .catch(() => {
                this.router.navigate(['login']);
                reject(false);
            });
        });
    }
}
