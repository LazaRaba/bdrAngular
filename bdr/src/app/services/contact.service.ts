import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrlContact = environment.apiUrlContact;

  
  constructor(private http: HttpClient) { }

  sendEmail(contact: Contact): Observable<Contact>{
    console.log('Données du formulaire :', contact);
    return this.http.post<Contact>(this.apiUrlContact, contact);  
    };

  }






