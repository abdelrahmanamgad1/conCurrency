import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../core/services/api.service";
import {Country} from "../../core/interfaces/currency.model";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  countries: Country[] = [];
  exform!: FormGroup;
  conversionOutput!: number;
  isLoading: boolean = false;

  constructor(public apiService: ApiService, private fb: FormBuilder) {}

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
      console.log('-> this.countries',response);
      this.countries = response;
      this.exform.get('srcCountry')?.setValue(this.apiService.countries[1])
      this.exform.get('dstCountry1')?.setValue(this.apiService.countries[2])
      this.exform.get('dstCountry2')?.setValue(this.apiService.countries[3])

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
    this.isLoading = true;
    this.apiService
      .getComparison(
        this.exform.get('srcCountry')?.value['code'],
        this.exform.get('dstCountry1')?.value['code'],
        this.exform.get('dstCountry2')?.value['code'],
        this.exform.get('value')?.value
      )
      .subscribe((response) => {
        console.log(response);
        this.exform.controls['amount1'].setValue(response.firstTargetCurrency.conversion_result);
        this.exform.controls['amount2'].setValue(response.secondTargetCurrency.conversion_result);
        this.isLoading = false;

        console.log(response);
        console.log(this.conversionOutput);
      });
  }

}
