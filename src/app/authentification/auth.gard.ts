import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

//à mettre dans le app.module.ts :
//import {AuthGuard} from './auth.guard';
//providers: [AuthGuard]

//à mettre dans le app-routing.module.ts :
//import {AuthGuard} from './auth.guard';
//
//pour les path nécessitant d'être login :
//canActivate[AuthGuard]

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
