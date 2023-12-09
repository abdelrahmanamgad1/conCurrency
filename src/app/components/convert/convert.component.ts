import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {ApiService} from "../../core/services/api.service";
import {Country} from "../../core/interfaces/currency.model";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  exform!: FormGroup;
  countries: Country[] = [];
  conversionOutput!: number;
  isLoading: boolean = false;


  constructor(public apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exform = this.fb.group({
      value: [null, [Validators.required]],
      srcCountry: ['', [Validators.required]],
      dstCountry: ['', [Validators.required]],
      amount: ['', { value: '', disabled: true }],

    });

    this.apiService.getCurrencyApi().subscribe((response) => {
      console.log('-> this.countries',response);
      this.countries = response;
      this.exform.get('srcCountry')?.setValue(this.apiService.countries[1])
      this.exform.get('dstCountry')?.setValue(this.apiService.countries[2])
    });


  }
  get value() {
    return this.exform.get('value');
  }
  get srcCountry() {
    return this.exform.get('srcCountry');
  }
  get dstCountry() {
    return this.exform.get('dstCountry');
  }
  get gender() {
    return this.exform.get('gender');
  }
  setAmount() {}
  convert() {
    this.isLoading=true;

    this.apiService
      .getConversion(
        this.exform.get('srcCountry')?.value['code'],
        this.exform.get('dstCountry')?.value['code'],
        this.exform.get('value')?.value
      )
      .subscribe((response) => {
        this.exform.controls['amount'].setValue(response);
        this.isLoading = false;
        console.log(response);
        console.log(this.conversionOutput);
      });
localStorage.setItem('srcCountry',JSON.stringify(this.srcCountry?.value))
localStorage.setItem('value',JSON.stringify(this.value?.value))

    }

}

