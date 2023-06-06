import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent {
  //Fermer le aside-nav quand on click sur un lien(ecouter dans parents header)
  @Output() close: EventEmitter<string> = new EventEmitter();

  //emettre l'evenement vers le parents composant header
  handleClose(): void {
    this.close.emit()
  }
}
