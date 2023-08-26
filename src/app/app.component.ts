import { Component } from '@angular/core';
import { NotificationService } from './core/services/notification.service';
import { IndividualConfig } from 'ngx-toastr';
import { toastPayload } from './core/interfaces/toastPayLoad';
import { ApiService } from './core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Currency } from './core/interfaces/currency.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conCurrency';
  toast!: toastPayload;
  data: Currency[] = [];
  datas="";


  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  getData() {
    this.apiService.getCurrencyApi().subscribe((response) => {
      const arr= response.map(function(value){return value.name})
      this.datas = arr[1];
      console.log(this.datas);    
    });
  }

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
}
