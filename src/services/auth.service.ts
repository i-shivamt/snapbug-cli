import { Injectable } from '@angular/core';
import { LoginResponse } from '../interface/login-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  SPIRNG_SERVER_URI = 'http://localhost:3001/api/v1';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.SPIRNG_SERVER_URI}/auth/`, {
      username,
      password,
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
