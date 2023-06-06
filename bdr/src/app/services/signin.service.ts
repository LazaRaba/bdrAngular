import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Signin } from '../models/signin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private apiUrlContact = environment.apiUrlSignin;

  constructor( private http: HttpClient) { }

  connect(signin: Signin): Observable<Signin> {
    console.log('User:',signin);
    return this.http.post<Signin>(this.apiUrlContact, signin);
    
  }
}
