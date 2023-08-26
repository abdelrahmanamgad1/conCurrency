import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency.model';
import { tap,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected _currencies: Currency[] = [];

  private baseUrl = 'https://currencyconversionproject-production.up.railway.app';

  private apiUrl = `${this.baseUrl}/currencies`;

  constructor(private http: HttpClient) {}
  set heroes(currencies: Currency[]) {
    this._currencies = currencies;
  }
  get heroes() {
    return this._currencies;
  }


  getCurrencyApi(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl).pipe(
      tap((currencies) => {
        this._currencies = currencies;
      })
    );
  }


}
  


  // getCurrencyApi(): Observable<Currency> {
  //   return this.http.get<Currency>(
  //     'https://v6.exchangerate-api.com/v6/ecf10bab01b34bf0de9636e1/latest/USD'
  //   );
  // }
