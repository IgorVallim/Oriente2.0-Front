import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(public router: Router, private sessionService: SessionService) {}
  
  canActivate(): boolean {
    if (sessionStorage.getItem("isLogged")=== "true") {
      
      let user: any = JSON.parse(sessionStorage.getItem("user"));
      if(user) this.sessionService.updateUser(user);

      let token: string = sessionStorage.getItem("token");
      if(token) this.sessionService.setToken(token);
      
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
