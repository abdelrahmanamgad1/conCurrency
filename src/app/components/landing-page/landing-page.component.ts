import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Currency } from 'src/app/core/interfaces/currency.model';
import { toastPayload } from 'src/app/core/interfaces/toastPayLoad';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CardsListStaticData } from 'src/app/models/data.static';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  selectedOption: string = 'convert';
  title = 'conCurrency';
  toast!: toastPayload;
  data: Currency[] = [];
  datas = '';
  arr!: string;
  myFavArray: any = [];
  showFav = false;
  staticCardsList: any;
  srcCountry: any;
  value: any;
  convertingArray: any[] = [];

  constructor(private apiService: ApiService) {}
  setSelectedOption(option: string): void {
    this.selectedOption = option;
  }
  testFavChanges(card: any) {
    this.srcCountry = JSON.parse(localStorage.getItem('srcCountry') as any);
    this.value = JSON.parse(localStorage.getItem('value') as any);
    
    this.myFavArray = card;
    this.myFavArray?.push(this.srcCountry);
    localStorage.setItem('favList', JSON.stringify(this.myFavArray));
    this.myFavArray = JSON.parse(localStorage.getItem('favList') as any);

    this.myFavArray.forEach((item: any, i: number) => {
      this.apiService
        .getConversion(this.srcCountry.code, item.code, this.value)
        .subscribe(
          (response: any) => {
            this.myFavArray[i]['value'] = response;
          },
          (err) => {
            console.log(err);
          }
        );
    });
    
  }

  getData() {
    this.apiService.getCurrencyApi().subscribe((res) => {
      this.arr = JSON.stringify(res);
    });
  }
  show(){
    this.showFav = true
  }
}
