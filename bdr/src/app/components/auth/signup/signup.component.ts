import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebNotificationService } from 'src/app/services/web-notification.service';
import { NotificationModel } from 'src/app/models/notificationModel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
  valeurCode: string = '';
  adminCodes: {};


  constructor(private router: Router, private fb: FormBuilder, private signupService: AuthService, private notificationService: WebNotificationService) {

    this.adminCodes = {
      '1111': 'Laure',
      '2222': 'Christide',
      '3333': 'Laurie'
    };
    const regexCode = new RegExp(`^(${Object.keys(this.adminCodes).join('|')})$`);


    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // Initialisation des champs de formulaire avec des validateurs
    this.name = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.prename = this.fb.control("", [Validators.required, Validators.minLength(2)])
    this.code = this.fb.control("", [Validators.required, Validators.pattern(regexCode)])
    this.email = this.fb.control("", [Validators.required, Validators.email, Validators.pattern(regexEmail)])
    this.password = this.fb.control("", [Validators.required, Validators.minLength(6)])

    // Création d'un groupe de formulaire avec les champs définis préalablement

  }
  ngOnInit(): void {
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
    const user = this.signupForm.getRawValue()
    console.log(user);
    // const user: Signup = {
    //   name: this.name.value,
    //   prename: this.prename.value,
    //   code: this.code.value,
    //   email: this.email.value,
    //   password: this.password.value,
    // };

    console.log("je suis", user);

    // Appel de la méthode "create user" du service d'authentification
    this.signupService.createUser(user);
    this.signupForm.reset();

    // .subscribe({
    //   next: () => {
    //     this.createOk = true;
    //     this.createOk = true

    //     const notif = new NotificationModel()
    //     notif.message = "Compte créer avec succès, connectez-vous"
    //     notif.status = "success"
    //     this.notificationService.emitNotification(notif)

    //     this.signupForm.reset();
    //     this.router.navigateByUrl('/signin');
    //   },
    //   error: (error: any) => {
    //     console.log("connect:", error);

    //     const notif = new NotificationModel()
    //     notif.message = "L'inscription a échoué."
    //     notif.status = "danger"
    //     this.notificationService.emitNotification(notif)
    //     return error
    //   }
    // })












    // .subscribe({
    //   // Si la connexion réussit
    //   next: (result) => {
    //     console.log("createUser() success");
    //     this.createOk = true
    //     const notif = new NotificationModel()
    //     notif.message = "Compte créer avec succès, connectez-vous"
    //     notif.status = "success"
    //     this.notificationService.emitNotification(notif)
    //     this.signupForm.reset();
    //     this.router.navigateByUrl('/signin');
    //     return result;
    //   },
    //   // Si la connexion échoue
    //     error: (error: any) => {
    //       console.log("createUser() error:", error); // Ajouter cette ligne pour afficher l'erreur renvoyée par la méthode createUser()
    //       // Affichage d'un message d'erreur à l'utilisateur
    //       const notif = new NotificationModel()
    //       notif.message = "L'inscription a échoué."
    //       notif.status = "danger"
    //       this.notificationService.emitNotification(notif)
    //       return error
    //     }
    // })
  }
}
