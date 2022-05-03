import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Input } from '../models/input.model';

const baseUrl= 'https://climate-right.azurewebsites.net/input';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Input[]> {
    return this.http.get<Input[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
