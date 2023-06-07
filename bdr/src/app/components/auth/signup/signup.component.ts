import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signup: Signup | undefined;

  // Déclarer le conatiner des champs de formulaire
  signupForm: FormGroup;

  // Definir les champs de controle
  name: FormControl;
  prename: FormControl;
  code: FormControl;
  email: FormControl;
  password: FormControl;
  createOk: boolean = false;
  errorMessage: string = '';
  valeurCode: string = '';


  constructor(private fb: FormBuilder, private signinService: AuthService) {

    this.valeurCode = '1234';

    // Initialisation des champs de formulaire avec des validateurs
    this.name = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.prename = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.code = this.fb.control("", [Validators.required, Validators.pattern(this.valeurCode)])
    this.email = this.fb.control("", [Validators.required, Validators.email])
    this.password = this.fb.control("", [Validators.required, Validators.minLength(6)])

    // Création d'un groupe de formulaire avec les champs définis préalablement
    this.signupForm = this.fb.group({
      name: this.name,
      prename: this.prename,
      code: this.code,
      email: this.email,
      password: this.password,
    });
  }

  // Fonction de création de compte
  handleCreateUser() {
    console.log(this.signupForm.valid);

    const signup: Signup = {
      name: this.name.value,
      prename: this.prename.value,
      code: this.code.value,
      email: this.email.value,
      password: this.password.value,
    };

    // Appel de la méthode "create user" du service d'authentification
    this.signinService.createUser(signup).subscribe({
      // Si la connexion réussit
      next: () => {
        this.createOk = true;
        this.signupForm.reset();
        alert('Vous votre compte a été crée avec succès');
      },
      // Si la connexion échoue
      error: (error) => {
        // Affichage d'un message d'erreur à l'utilisateur
        this.errorMessage = 'Une erreur s\'est produite lors de votre connection. Veuillez réessayer plus tard.';
      }
    });

  }
}
