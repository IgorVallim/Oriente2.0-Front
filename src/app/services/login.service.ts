import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = environment.API + "auth/login";

  constructor(private http: HttpClient) { }

  login(tia: string, password: string){
    return this.http.post<any>(this.API, { "tia": tia, "password": password });
  }
}
