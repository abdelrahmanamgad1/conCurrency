import { Injectable } from '@angular/core';
import {ConvCurrency, Currency, Data} from '../interfaces/currency.model';
import { Observable,map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  currencies: Data[] = [];
  testUrl =
    'https://v6.exchangerate-api.com/v6/ecf10bab01b34bf0de9636e1/latest/USD';

  baseUrl =
    'https://currencyconversionproject-production.up.railway.app';

  apiUrl = `${this.baseUrl}/currencies`;

  constructor(private http: HttpClient) {}

  getCurrencyApi(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl).pipe(map((res: any) => res.data))
  }

    convert(data: ConvCurrency): Observable<ConvCurrency> {
      return this.http.post<ConvCurrency>(`${this.baseUrl}/pair-conversion`, data);
    }
  //  selectFavourite(base_currency: string):Observable<any>{
  //   return this.http.post<any>(this.apiUrl)/favorite-currencies?base={base_currency}
  //  }

   postData(data: any,baseCurrency:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/favorite-currencies?base=${baseCurrency}`, data);
  }
  }

