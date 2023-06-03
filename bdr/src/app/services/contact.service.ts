import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  postMessageData(contactForm: FormGroup): Observable<any> {
    const messageData = {
      from: contactForm.value.email,
      to: 'lazadevop@gmail.com',
      subject: contactForm.value.subject,
      text: contactForm.value.message
    };
    return this.http.post(this.apiUrl, messageData).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
        throw error;
      })
    );
  }
  }


