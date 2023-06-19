import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { NotificationModel } from 'src/app/models/notificationModel';
import { WebNotificationService } from 'src/app/services/web-notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact | undefined;

  // Définition des champs de formulaire
  contactForm: FormGroup
  name: FormControl
  email: FormControl
  subject: FormControl
  message: FormControl
  messageSent: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private contactService: ContactService, private notificationService: WebNotificationService) {

    // Initialisation des champs de formulaire avec des validateurs
    this.name = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.email = this.fb.control("", [Validators.required, Validators.email])
    this.subject = this.fb.control("", [Validators.required])
    this.message = this.fb.control("", [Validators.required, Validators.minLength(10)])

    // Création d'un groupe de formulaire avec les champs définis préalablement
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    })
  }

  ngOnInit(): void { }

  // Fonction de soumission du formulaire
  envoyerMessage() {
    console.log(this.contactForm.valid);


    const contact: Contact = {
      name: this.name.value,
      subject: this.subject.value,
      email: this.email.value,
      message: this.message.value,
    };

    this.contactService.sendEmail(contact).subscribe({
      next: () => {
        this.messageSent = true;
        this.contactForm.reset();
        // alert('Message envoyé avec succès');
        const notif = new NotificationModel()
        notif.message = "Message envoyé avec succès"
        notif.status = "success"
        this.notificationService.emitNotification(notif)
      },
      error: (error: any) => {
        const notif = new NotificationModel()
        notif.message = "Le message n'a pas été envoyé. Erreur inconnue"
        notif.status = "danger"
        this.notificationService.emitNotification(notif)
      }
    });
  }
}

