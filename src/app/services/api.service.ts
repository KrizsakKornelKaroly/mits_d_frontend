import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { username, password }, { observe: 'response' });
  }



}

