import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TccService {

  API: string = environment.API + "tccs/"

  constructor(private http: HttpClient) { }

  getDetail(id: number, token: string){
    let headers = { headers: new HttpHeaders({'Authorization': token}) };
    return this.http.get<any>(this.API + "detail/" +id, headers);
  }
}
