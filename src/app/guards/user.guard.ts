import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
) { }
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        
    // console.log('route.data:', route.data)
    const user = this.userService.getUser()
    if (user) return true
    else {
        this.router.navigateByUrl('/signup')
        return false
    }
}
  
}
