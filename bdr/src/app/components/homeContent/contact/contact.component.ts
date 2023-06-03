import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  // Définition des champs de formulaire
  contactForm: FormGroup 
  name: FormControl  
  email: FormControl  
  subject: FormControl 
  message: FormControl  

  constructor(private fb:FormBuilder){
    // Initialisation des champs de formulaire avec des validateurs
    this.name = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.email = this.fb.control("", [Validators.required, Validators.email])
    this.subject = this.fb.control("", [Validators.required])
    this.message = this.fb.control("", [Validators.required,Validators.minLength(10)])

    // Création d'un groupe de formulaire avec les champs définis préalablement
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    })
  }
  
  ngOnInit(): void {}

  // Fonction de soumission du formulaire
  handleSubmit(){
    console.log(this.contactForm)
  }
}
