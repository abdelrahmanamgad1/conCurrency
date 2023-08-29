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

  baseUrl = 'https://diligent-stranger-production.up.railway.app/';

  apiUrl = `${this.baseUrl}currencies`;

  constructor(private http: HttpClient) {}

  getCurrencyApi(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl).pipe(map((res: any) => res.data));
  }

  getConversion(
    base: string,
    target: string,
    amount: number
  ): Observable<number> {
    return this.http.get(
      `${this.baseUrl}/pair-conversion?base=${base}&target=${target}&amount=${amount}`
    ).pipe(map((response:any)=>{return response['data']['conversion_result'] as number}));
  }

   postData(data: any,baseCurrency:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/favorite-currencies?base=${baseCurrency}`, data);
  }

  getComparison(
    base: string,
    target1: string,
    target2: string,
    amount: number
  ): Observable<{ comparison_result1: number; comparison_result2: number }> {
    return this.http.get(
      `${this.baseUrl}/comparison?base=${base}&target1=${target1}&target2=${target2}&amount=${amount}`
    ).pipe(
      map((response: any) => {
        return {
          comparison_result1: response['data']['comparison_result1'] as number,
          comparison_result2: response['data']['comparison_result2'] as number,
        };
      })
    );
  }

  }

