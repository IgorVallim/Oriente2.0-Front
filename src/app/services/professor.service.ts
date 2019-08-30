import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  API: string = environment.API + "teachers/";

  constructor(private http: HttpClient) { }

  getList(token: string){
    let headers = { headers: new HttpHeaders({'Authorization': token}) };
    return this.http.get<any>(this.API + "teacher-list/", headers);
  }

  getDetail(id: string, token: string){
    let headers = { headers: new HttpHeaders({'Authorization': token}) };
    return this.http.get<any>(this.API + "detail/" + id, headers);
  }
}
