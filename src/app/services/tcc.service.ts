import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TCC } from '../models/tcc';

@Injectable({
  providedIn: 'root'
})
export class TccService {

  API: string = environment.API + "tccs/"

  constructor(private http: HttpClient) { }

  getDetail(id: number, token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "detail/" +id, headers);
  }

  createTcc(tcc: TCC, token: string){
    let headers = this.getHeaders(token);
    return this.http.post<TCC>(this.API, {"students": tcc.students, "description": tcc.description,
      "theme": tcc.theme, "rudderId": tcc.rudderId, "course": tcc.course, "tccStage": tcc.tccStage }, headers);
  }

  getHeaders(token: string){
    return { headers: new HttpHeaders({'Authorization': token}) };
  }

  getByTeacher(token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "search/rudder", headers);
  }
}
