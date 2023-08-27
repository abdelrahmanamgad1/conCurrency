import { Component ,EventEmitter, Input, Output} from '@angular/core';
import { CurrencyCardModel } from '../models/data.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  @Input() cardsList: CurrencyCardModel[] = [];
  @Output() closeFav = new EventEmitter<boolean>();
  @Output() favItemChanges = new EventEmitter<CurrencyCardModel>();
  
  toggleFav(card: CurrencyCardModel) {
    card.checked = !card.checked;
    this.favItemChanges.emit(card);
  }
  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
  }
  ngOnDestroy(): void {
    document.body.style.overflow ='auto'
  }

}
