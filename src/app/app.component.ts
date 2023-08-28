import { Component, Input } from '@angular/core';
import { NotificationService } from './core/services/notification.service';
// import { IndividualConfig } from 'ngx-toastr';
import { toastPayload } from './core/interfaces/toastPayLoad';
import { ApiService } from './core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Currency } from './core/interfaces/currency.model';
import { Observable } from 'rxjs';
import { CurrencyCardModel } from './models/data.model';
import { CardsListStaticData } from './models/data.static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conCurrency';
  toast!: toastPayload;
  data: Currency[] = [];
  datas = '';
  arr!: string;
  myFavArray = [];
  showFav = false;
  staticCardsList = CardsListStaticData;
  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    private http: HttpClient
  ) {
    console.log("test");
    
  }

  getData() {
    this.apiService.getCurrencyApi().subscribe((res) => {
      this.arr = JSON.stringify(res);
    });
    // const favArray: any = localStorage.getItem('myArrayKey');

    // // Parse the JSON string back into an array
    // this.myFavArray = JSON.parse(favArray);
    // console.log(this.myFavArray);
  }

  buttonClick(type: string) {
    // this.toast = {
    //   // message: 'ERROR ana nadeen!!',
    //   // type: type,
    //   // ic: {
    //   //   timeOut: 2500,
    //   //   closeButton: true,
    //   // } as IndividualConfig,
    // };
    // this.notificationService.SetErrorMessage(this.toast);
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
