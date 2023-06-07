import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signin } from 'src/app/models/signin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signin: Signin | undefined;

  // Déclarer le conatiner des champs de formulaire
  signinForm: FormGroup;

  // Definior les champs de controle
  email: FormControl;
  password: FormControl;
  connectOk: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private signinService: AuthService) {

    // Initialisation des champs de formulaire avec des validateurs
    this.email = this.fb.control("", [Validators.required, Validators.email]);
    this.password = this.fb.control("", [Validators.required, Validators.minLength(6)]);

    // Création d'un groupe de formulaire avec les champs définis préalablement
    this.signinForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {

  }

  // Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de connexion
  handleConnect() {
    console.log(this.signinForm.valid);


    const signin: Signin = {
      email: this.email.value,
      password: this.password.value,
    };

    // Appel de la méthode "connect" du service d'authentification
    this.signinService.connect(signin).subscribe({
      // Si la connexion réussit
      next: () => {
        this.connectOk = true;
        this.signinForm.reset();
        alert('Vous êtes connectés');
      },
      // Si la connexion échoue
      error: (error) => {
        // Affichage d'un message d'erreur à l'utilisateur
        this.errorMessage = 'Une erreur s\'est produite lors de votre connection. Veuillez réessayer plus tard.';
      }
    });
  }
}