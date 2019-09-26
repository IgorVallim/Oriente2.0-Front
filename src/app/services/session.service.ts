import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: any = null;
  private token: string = "";
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor() { }

  updateUser(user: any){
    this.user = user;
    sessionStorage.setItem("user", JSON.stringify(user));
    this.emitChanges();
  }

  getUser(){
    return this.user;
  }

  logout(){
    this.user = null;
    this.token = "";
    sessionStorage.clear();
    sessionStorage.setItem("isLogged", "false");
  }

  emitChanges(){
    this.emitChangeSource.next(this.user);
  }

  setToken(token: string){
    this.token = token;
    sessionStorage.setItem("isLogged", "true");
    sessionStorage.setItem("token", token);
  }

  getToken(){
    return this.token;
  }
}
