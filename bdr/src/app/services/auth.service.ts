import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Signin, SigninResponse, SignupData } from '../models/signin';
import { Signup } from '../models/signup';
import { WebNotificationService } from './web-notification.service';
import { NotificationModel } from '../models/notificationModel';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrlAuth = environment.apiUrlAuth;

  //Indiquer si l'user est connecté ou pas
  isAuth$ = new BehaviorSubject<any>(false);
  token!: string;
  userId!: string;
  createOk: boolean = false;

  signinResponse: SigninResponse | undefined

  // signupData: SignupData | undefined

  constructor(private router: Router, private http: HttpClient, private notificationService: WebNotificationService) { }


  getToken() {
    return this.token;
  }



  connect(signin: Signin) {
    console.log('user:', signin);
    return this.http.post(this.apiUrlAuth + '/signin', signin)
    .subscribe({
      next: (authData: any): void => {
        console.log("connect() success");
        this.userId = authData.userId;
        this.token = authData.token;
        this.isAuth$.next(authData);

        const notif = new NotificationModel()
        notif.message = "vous etes connectés"
        notif.status = "success"
        this.notificationService.emitNotification(notif)

        this.router.navigateByUrl('/parent');
      },
      error: (error: any) => {
        console.log("createUser() error:", error); // Ajouter cette ligne pour afficher l'erreur renvoyée par la méthode createUser()
        // Affichage d'un message d'erreur à l'utilisateur
        const notif = new NotificationModel()
        notif.message = "L'inscription a échoué."
        notif.status = "danger"
        this.notificationService.emitNotification(notif)
        return error
      }
    })


  }

  createUser(user: Signup) {
    console.log("createUser() called");
    const url = `${this.apiUrlAuth}/signup`;
    console.log(url);
    
    const options = { withCredentials: true };
    return this.http.post(url, user, options)
    
      .subscribe({ 
        next: () => {
          console.log("createUser() success");
          this.createOk = true

          const notif = new NotificationModel()
          notif.message = "Compte créer avec succès, connectez-vous"
          notif.status = "success"
          this.notificationService.emitNotification(notif)


          
          this.router.navigateByUrl('/signin');
          // return result;
        },
        error: (error: any) => {
          console.log("createUser() error:", error); 
          const notif = new NotificationModel()
          notif.message = "L'inscription a échoué."
          notif.status = "danger"
          this.notificationService.emitNotification(notif)
          // Swal.fire("error",error.error.message, 'error');

          return error
        }
      })
  }

}
////////////////////////////////////////////////////////////////


// export class AuthService {

//   private apiUrlAuth = environment.apiUrlAuth;
//   private httpOptions ={
//     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
//   }

//   constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }

//   getToken(){
//     console.log(this.tokenStorage.getToken);
    
//     return this.tokenStorage.getToken();

//   }

//   connect(signin: Signin): Observable<any> {
//     return this.http.post(this.apiUrlAuth + '/signin', signin, this.httpOptions );
//   }

//   createUser(signup: Signup): Observable<any> {
//     return this.http.post(this.apiUrlAuth + '/signup', signup, this.httpOptions );
//   }
// }