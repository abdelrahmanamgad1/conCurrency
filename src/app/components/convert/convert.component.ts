import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  exform!: FormGroup;
  conversionOutput!: number;
  isLoading: boolean = false;

  constructor(public apiService: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.exform = this.fb.group({
      value: [null, [Validators.required]],
      srcCountry: ['', [Validators.required]],
      dstCountry: ['', [Validators.required]],
      amount: ['', {value: '', disabled: true}],
    });
    this.exform.get('srcCountry')?.setValue(this.apiService.countries[1])
    this.exform.get('dstCountry')?.setValue(this.apiService.countries[2])
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
        this.isLoading=false;

      });

      localStorage.setItem('srcCountry',JSON.stringify(this.exform.get('srcCountry')?.value))
      localStorage.setItem('value',JSON.stringify(this.exform.get('srcCountry')?.value))

  }

}
