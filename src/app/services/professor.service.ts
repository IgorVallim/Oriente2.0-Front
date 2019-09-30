import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  API: string = environment.API + "teachers/";

  constructor(private http: HttpClient) { }

  getList(token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "teacher-list/", headers);
  }

  getDetail(id: string, token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "detail/" + id, headers);
  }

  getHeaders(token: string){
    return { headers: new HttpHeaders({'Authorization': token}) };
  }

  update(professor: Professor, token: string){
    let headers = this.getHeaders(token);
    return this.http.put<Professor>(this.API, professor, headers);
  }
}
