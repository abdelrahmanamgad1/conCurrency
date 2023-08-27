import { Component } from '@angular/core';
import { NotificationService } from './core/services/notification.service';
import { IndividualConfig } from 'ngx-toastr';
import { toastPayload } from './core/interfaces/toastPayLoad';
import { CurrencyCardModel } from './models/data.model';
import { CardsListStaticData } from './models/data.static';

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
      message: 'ERROR ana nadeen!!',
      type: type,
      ic: {
        timeOut: 2500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.notificationService.SetErrorMessage(this.toast);
  }
  showFav = false;
  staticCardsList = CardsListStaticData;

  testFavChanges(card: CurrencyCardModel) {
    console.log(card);
  }
}
