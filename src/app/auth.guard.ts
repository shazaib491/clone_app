import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
  private authService: AuthService,
  private router: Router
) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ):boolean{
      if(!this.authService.isLoggedIn()){
        this.router.navigateByUrl('/login');
        return false
      }
      return true;

  }
}
