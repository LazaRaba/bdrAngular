import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  // Booléen qui indique si le menu doit être affiché ou non
  isDisplayMenu: boolean = false;

  // Fonction appelée lorsqu'on clique sur le bouton du menu burger
  handleDisplayMenu(): void {
    this.isDisplayMenu = !this.isDisplayMenu;
  }

  // Fonction appelée lorsqu'on clique sur un lien du menu burger pour le fermer
  handleCloseMobileMenu(){
    this.isDisplayMenu = false;
  }

}
