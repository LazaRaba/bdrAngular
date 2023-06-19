// Import des dépendances nécessaires
import { Component } from '@angular/core';
import { NotificationModel } from 'src/app/models/notificationModel';
import { WebNotificationService } from 'src/app/services/web-notification.service';

@Component({
  selector: 'app-web-notification',
  templateUrl: './web-notification.component.html',
  styleUrls: ['./web-notification.component.css']
})
export class WebNotificationComponent {

  // Définition d'une propriété de notification initialisée à une nouvelle instance de NotificationModel
  notification: any = new NotificationModel();

  // Constructeur pour injecter le service de notification
  constructor(private notificationService: WebNotificationService) {

  }

  ngOnInit() {
    // Abonnement à l'observable notification$ du service de notification
    this.notificationService.notification$.subscribe({
      // Méthode next appelée avec la notification en paramètre
      next: (notification: NotificationModel) => {
        // Mise à jour de la propriété notification avec la nouvelle notification
        this.notification = notification;
        // Récupération de la valeur de timeout de la notification
        const timeout: any = notification.timeout
        // Déclenchement d'un minuteur pour masquer la notification après le temps spécifié dans timeout
        setTimeout(() => {
          this.notification = null;
        },
          timeout)
      }
    })
  }
  closeNotif(){
    this.notification = null;
  }

}