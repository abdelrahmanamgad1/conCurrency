import { Injectable } from '@angular/core';
import { ConvCurrency, Currency, Data } from '../interfaces/currency.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  currencies: Data[] = [];
  testUrl =
    'https://v6.exchangerate-api.com/v6/ecf10bab01b34bf0de9636e1/latest/USD';

  baseUrl = 'https://diligent-stranger-production.up.railway.app/';

  apiUrl = `${this.baseUrl}/currencies`;

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

}
