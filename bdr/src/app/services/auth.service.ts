import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Signin } from '../models/signin';
import { Signup } from '../models/signup';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrlAuth = environment.apiUrlAuth;
  // token: string;
  // userId: string;
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  createUser(signup: Signup): Observable<Signup> {
    console.log('CreateUser:',signup);
    return this.http.post<Signup>(this.apiUrlAuth+'/signup', signup)
  }

  connect(signin: Signin): Observable<Signin> {
    console.log('User:',signin);
    return this.http.post<Signin>(this.apiUrlAuth+'/signin', signin);
    
  } 
}
