import { Component } from '@angular/core';
import {Data} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConvCurrency} from "../../core/interfaces/currency.model";
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  countries: Data[] = [];
  exform!: FormGroup;
  conversionOutput!: number;
  conversionData!: ConvCurrency;
  selectedCountry: string | undefined;
  selectedFirst: string = 'undefined';

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exform = this.fb.group({
      value: [null, [Validators.required]],
      srcCountry: ['', [Validators.required]],
      dstCountry1: ['', [Validators.required]],
      dstCountry2: ['', [Validators.required]],

      amount1: ['', { value: '', disabled: true }],
      amount2: ['', { value: '', disabled: true }],

    });

    this.apiService.getCurrencyApi().subscribe((response) => {
      this.countries = response;
      console.log('-> this.countries', this.countries);
    });
  }
  get value() {
    return this.exform.get('value');
  }
  get srcCountry() {
    return this.exform.get('srcCountry');
  }
  get dstCountry1() {
    return this.exform.get('dstCountry1');
  }
  get dstCountry2() {
    return this.exform.get('dstCountry2');
  }

  compare() {
    this.apiService
      .getComparison(
        this.exform.get('srcCountry')?.value['code'],
        this.exform.get('dstCountry1')?.value['code'],
        this.exform.get('dstCountry2')?.value['code'],
        this.exform.get('value')?.value
      )
      .subscribe((response) => {
        console.log(response);
        this.exform.controls['amount1'].setValue(response.comparison_result1);
        this.exform.controls['amount2'].setValue(response.comparison_result2);
        console.log(response);
        console.log(this.conversionOutput);
      });
  }

}
