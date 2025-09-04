import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router){}
  
  
  canActivate(): Observable<boolean> {
    return this.auth.isLoggedIn().pipe(
      map(isLogged => {
        if(!isLogged){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
