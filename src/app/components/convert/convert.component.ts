import {Component, Injectable, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Data} from '@angular/router';
import {Currency} from 'src/app/core/interfaces/currency.model';
import {ApiService} from 'src/app/core/services/api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})

export class ConvertComponent implements OnInit {
  countries: Data[] = [];
  value: number | undefined;
  amount: number | undefined;
  exform!: FormGroup;
  // selectedCountry: string | undefined;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.exform = this.fb.group({
      value: ['', [Validators.required]],
      selectedCountry: [''],
    });

    this.apiService.getCurrencyApi().subscribe((response) => {
      this.countries = response
      console.log("-> this.countries", this.countries);

    });
  }
}
