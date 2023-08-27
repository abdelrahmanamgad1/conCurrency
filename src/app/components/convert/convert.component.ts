import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { Currency } from 'src/app/core/interfaces/currency.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ConvertComponent implements OnInit {
  countries: string[] = [];
  value: number | undefined;
  amount: number | undefined;
  exform!: FormGroup;
  selectedCountry: string | undefined;
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('ana hena');
    this.exform = new FormGroup({
      value: new FormControl(null, Validators.required),
      selectedCountry: new FormControl(null), // Add a FormControl for selectedCountry
    });

    this.apiService.getCurrencyApi().subscribe((response) => {
      this.countries = response.map((currency) => currency['name']);
    });
  }
}
