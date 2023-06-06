import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signin } from 'src/app/models/signin';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {

  signin : Signin | undefined;

  // Déclarer le conatiner des champs de formulaire
  signinForm: FormGroup

  // Definior les champsde controle
  email: FormControl
  password: FormControl
  ConnectOK: boolean = false
  errorMessage: string = '';


  constructor(private fb: FormBuilder, private signinService: SigninService) {

    // Initialisation des champs de formulaire avec des validateurs
    this.email = this.fb.control("", [Validators.required, Validators.email])
    this.password = this.fb.control("", [Validators.required, Validators.minLength(6)])

    // Création d'un groupe de formulaire avec les champs définis préalablement
    this.signinForm = this.fb.group({
      email: this.email,
      password: this.password,
    })
  }
    ngOnInit(): void {
      
    }

  handleConnect(){
    const signin: Signin = {
      email: this.email.value,
      password: this.password.value,
      
    };

    this.signinService.connect(signin).subscribe({
      next:()=>{
        this.ConnectOK = true;
        this.signinForm.reset();
        alert('Vous êtes connectés')
      },
      error: (error) => {
        this.errorMessage = 'Une erreur s\'est produite lors de votre connection. Veuillez réessayer plus tard.';
      }
    })
    
  }

  }

