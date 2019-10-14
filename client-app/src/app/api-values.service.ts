import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiValuesService {

  api = 'https://localhost:5001';

  constructor(private httpClient: HttpClient) { }

  get$() {
    return this.httpClient.get(`${this.api}/api/values`);
  }
}
