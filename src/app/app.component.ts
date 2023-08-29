import {Component, Input} from '@angular/core';
import {NotificationService} from './core/services/notification.service';
// import { IndividualConfig } from 'ngx-toastr';
import {toastPayload} from './core/interfaces/toastPayLoad';
import {ApiService} from './core/services/api.service';
import {HttpClient} from '@angular/common/http';
import {Currency} from './core/interfaces/currency.model';
import {Observable} from 'rxjs';
import {CurrencyCardModel} from './models/data.model';
import {CardsListStaticData} from './models/data.static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('favList',JSON.stringify([]))
  }
}
