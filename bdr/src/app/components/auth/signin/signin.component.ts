import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationModel } from 'src/app/models/notificationModel';
import { Signin } from 'src/app/models/signin';
import { AuthService } from 'src/app/services/auth.service';
import { WebNotificationService } from 'src/app/services/web-notification.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TokenStorageService} from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  //   signin: Signin | undefined;


  // Déclarer le conatiner des champs de formulaire
  signinForm: FormGroup;

    // Definior les champs de controle
    email: FormControl;
    password: FormControl;
    isLoggedIn: boolean= false;
    roles: string[]= [];



  constructor(private tokenStorage: TokenStorageService, private notificationService: WebNotificationService, private fb: FormBuilder, private signinService: AuthService, private router: Router) {

    //     // Initialisation du model SigninResponse




        this.email = this.fb.control("", [Validators.required, Validators.email]);
        this.password = this.fb.control("", [Validators.required, Validators.minLength(6)]);

        // Création d'un groupe de formulaire avec les champs définis préalablement
        this.signinForm = this.fb.group({
          email: this.email,
          password: this.password,
        });
      }

    //   ngOnInit(): void {

    //   }

    //   // Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de connexion
    handleConnect() {
      console.log(this.signinForm.valid);

          const signin: Signin = {
            email: this.email.value,
            password: this.password.value,
          };

          this.signinService.connect(signin)
          // .subscribe({
          //   next: (data) => {
          //     this.tokenStorage.saveToken(data.accessToken);
          //     this.tokenStorage.saveUser(data)
          //     this.isLoggedIn= true;
          //     this.roles = this.tokenStorage.getUser().roles;


          //     const notif = new NotificationModel()
          //     notif.message = "Compte créer avec succès, connectez-vous"
          //     notif.status = "success"
          //     this.notificationService.emitNotification(notif)
    
          //     this.signinForm.reset();
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
        }
      //.subscribe({
      //       // Si la connexion réussit
      //       next: (result: any) => {

      //         if(result.isSuccess){
      //           const data: SigninRes = result
      //           this.localStorageService.setItem("token", data.token) 
      //           this.localStorageService.setItem("userId", data.userId) 
      //           console.log(result);
      //           this.connectOk = true;

      //           const notif = new NotificationModel()
      //           notif.message = "Vous êtes connectés"
      //           notif.status = "success"
      //           this.notificationService.emitNotification(notif)

      //           this.signinForm.reset();
      //           this.router.navigateByUrl('/signin');
      //           return result;

      //         }
      //       },
      //       // Si la connexion échoue
      //       error: (error: any) => {
      //         console.log("connect:", error);

      //         const notif = new NotificationModel()
      //         notif.message = "L'inscription a échoué."
      //         notif.status = "danger"
      //         this.notificationService.emitNotification(notif)
      //         return error
      //       }
      //     });
      //     //Appel de la méthode "connect" du service d'authentification

    

  }
