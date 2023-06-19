import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  isAuth: any

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  // Booléen qui indique si le menu doit être affiché ou non
  isDisplayMenu: boolean = false;

  // Fonction appelée lorsqu'on clique sur le bouton du menu burger
  handleDisplayMenu(): void {
    this.isDisplayMenu = !this.isDisplayMenu;
  }

  // Fonction appelée lorsqu'on clique sur un lien du menu burger pour le fermer
  handleCloseMobileMenu() {
    this.isDisplayMenu = false;
  }

  private roles: string[] | undefined;
  isLoggedIn: boolean = false;
  showAdminBoard: boolean = false;
  name: string | undefined;



  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles?.includes('ROLE_ADMIN') ?? false;
      this.name = user.name;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
