import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit{
  cities: City[] | undefined;
  value: number | undefined;
  amount: number | undefined;
  exform!: FormGroup;


  selectedCity: City | undefined;

  ngOnInit() {
    this.exform = new FormGroup({
      value: new FormControl(null, Validators.required),

    });


    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
