import { Component, Input } from '@angular/core';
import { CurrencyCardModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss'],
})
export class RateCardComponent {
  @Input() cardData!: CurrencyCardModel
}
