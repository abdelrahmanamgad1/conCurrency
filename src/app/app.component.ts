import { Component } from '@angular/core';
import { NotificationService, toastPayload } from './core/services/notification.service';
import { IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conCurrency';
  toast!: toastPayload;
  constructor( private notificationService:NotificationService){}
  buttonClick(type: string) {
    this.toast = {
      message: 'ERROR !!',
      type: type,
      ic: {
        timeOut: 2500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.notificationService.SetErrorMessage(this.toast);
  }
}
