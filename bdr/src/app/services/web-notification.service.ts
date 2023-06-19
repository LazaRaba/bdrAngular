import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationModel } from '../models/notificationModel';

@Injectable({
  providedIn: 'root'
})
export class WebNotificationService {

  notif =  new NotificationModel();

  notification$ = new BehaviorSubject<NotificationModel>(this.notif);

  constructor() { }

  emitNotification(notification: any){
    this.notification$.next(notification);
  }
}
