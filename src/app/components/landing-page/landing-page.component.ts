import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public apiservice: ApiService) {
  }
}
