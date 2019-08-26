import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getDetails(id: string, token: string){
    let headers = { headers: new HttpHeaders({'Authorization': token}) };
    return this.http.get<any>(environment.API + "students/detail/" + id, headers);
  }
}
