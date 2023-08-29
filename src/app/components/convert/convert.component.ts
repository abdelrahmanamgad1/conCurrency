import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Data } from '@angular/router';
import { ConvCurrency, Currency } from 'src/app/core/interfaces/currency.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  countries: Data[] = [];
  exform!: FormGroup;
  conversionOutput!: number;
  rand1Country={code: 'GBP', name: 'England', flagUrl: 'https://flagsapi.com/GB/flat/64.png'}
  ;
  rand2Country={code: 'BHD', name: 'Bahrain', flagUrl: 'https://flagsapi.com/BH/flat/64.png'}

  selectedFirst: string = 'undefined';
  selectedItem = {code: 'GBP', name: 'England', flagUrl: 'https://flagsapi.com/GB/flat/64.png'}
  isLoading: boolean = false;
    constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exform = this.fb.group({
      value: [null, [Validators.required]],
      srcCountry: ['', [Validators.required]],
      dstCountry: ['', [Validators.required]],
      amount: ['', { value: '', disabled: true }],

    });

    this.apiService.getCurrencyApi().subscribe((response) => {
      this.countries = response;
      console.log('-> this.countries', this.countries);
    });
  }

  convert() {
    this.isLoading=true;

    this.apiService
      .getConversion(
        this.exform.get('srcCountry')?.value['code'],
        this.exform.get('dstCountry')?.value['code'],
        this.exform.get('value')?.value
      )
      .subscribe((response) => {
        console.log(response);
        this.exform.controls['amount'].setValue(response);
        this.isLoading=false;
        console.log(response);
        console.log(this.conversionOutput);
      }

      );
    }

}
