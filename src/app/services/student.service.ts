import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API: string = environment.API + "students/";

  constructor(private http: HttpClient) {}

  getDetail(id: string, token: string){
    let headers = { headers: new HttpHeaders({'Authorization': token}) };
    return this.http.get<any>(this.API + "detail/" + id, headers);
  }
}
