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
  title = 'conCurrency';
  toast!: toastPayload;
  currencies: Currency[] = [];
  myFavArray = [];
  showFav = false;
  staticCardsList = CardsListStaticData;

  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
  ) {
    this.getData()
  }

  getData() {
    this.apiService.getCurrencyApi().subscribe((res) => {
      this.apiService.countries = res;
    });
  }


  testFavChanges(card: any) {
    console.log("plaaaaaaaaaaaaaaaaaaaaaaa");

    // const favArray: any = localStorage.getItem('myArrayKey');
    console.log(card);
    // this.myFavArray=card;


    // Parse the JSON string back into an array
    // this.myFavArray = JSON.parse(favArray);
    // console.log(this.myFavArray);

    // console.log(card);
  }
}
