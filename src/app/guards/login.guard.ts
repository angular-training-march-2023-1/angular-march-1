import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      // here we check whether a user has logged in or not
      // return true if user has logged in
      // return false if user has not logged in
      let status: boolean = false;
      if(!this.authService.isLoggedIn){
        status = false;
        // also we can navigate to login component
        this.router.navigate(['login']);
      }else{
        status = true;
      }
      return status;
  }
  
}
