import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = environment.API + "auth/";

  constructor(private http: HttpClient) { }

  login(tia: string, password: string, path: string){
    return this.http.post<any>(this.API+path, { "tia": tia, "password": password });
  }
}
