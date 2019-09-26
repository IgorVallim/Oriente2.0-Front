import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API: string = environment.API + "students";

  constructor(private http: HttpClient) {}

  getDetail(id: string, token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "/detail/" + id, headers);
  }

  getByTia(tia: string, token: string){
    let headers = this.getHeaders(token);
    return this.http.get<any>(this.API + "/detail-tia/" + tia, headers);
  }

  update(student: Student, token: string){
    let headers = this.getHeaders(token);
    return this.http.put<Student>(this.API, student, headers);
  }

  getHeaders(token: string){
    return { headers: new HttpHeaders({'Authorization': token}) };
  }
}
