import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hightemperature } from '../models/hightemperature.model';

const baseUrl= 'https://climate-right.azurewebsites.net/hightemperature';
@Injectable({
  providedIn: 'root'
})
export class HightemperatureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hightemperature[]> {
    return this.http.get<Hightemperature[]>(baseUrl);
  }
}
