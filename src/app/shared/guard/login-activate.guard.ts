import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (localStorage.getItem('loggedInUserId')) {
      this.router.navigate(['/e-time/time']);
      return false;
    }
    
    return true;
  }
}
