import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = environment.API + "auth/";

  constructor(private http: HttpClient) { }

  loginStudent(tia: string, password: string){
    return this.http.post<any>(this.API + "login", { "tia": tia, "password": password }, { observe: "response" });
  }

  loginProfessor(drt: string, password: string){
    return this.http.post<any>(this.API + "login-teacher", { "drt": drt, "password": password }, { observe: "response" });
  }
}
