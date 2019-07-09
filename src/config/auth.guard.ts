import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, } from '@angular/router';
import { LoginService } from '../app/views/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _login: LoginService) { }
    canActivate(router: ActivatedRouteSnapshot): boolean {
        if (this._login.isLogin()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }
}
