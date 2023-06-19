import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrlParent = environment.apiUrlParent;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any>{
    return this.http.get(this.apiUrlParent + 'all', {responseType: 'text'})
  }

  getParentBoard(): Observable<any>{
    return this.http.get(this.apiUrlParent + 'parent', {responseType: 'text'})
  }

  getAdminBoard(): Observable<any>{
    return this.http.get(this.apiUrlParent + 'admin', {responseType: 'text'})
  }
}
