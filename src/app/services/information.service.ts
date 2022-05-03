import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Information } from '../models/info.models';

//const baseUrl = 'http://localhost:8080/api/information';
const baseUrl= 'https://climate-right.azurewebsites.net/information';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Information[]> {
    return this.http.get<Information[]>(baseUrl);
  }

  get(id: any): Observable<Information> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByInfo(info: any): Observable<Information[]> {
    return this.http.get<Information[]>(`${baseUrl}?info=${info}`);
  }
}
