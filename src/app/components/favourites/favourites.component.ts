import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { CurrencyCardModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {
  cardsList!: any[];
  @Output() closeFav = new EventEmitter<boolean>();
  @Output() favItemChanges = new EventEmitter<any>();

  selectedFav: string[] = [];
  baseCurrency = 'USD';

  constructor(private apiServise: ApiService) {
    //  this.baseCurrency = localStorage.getItem('baseCurrency');
    this.apiServise.getCurrencyApi().subscribe((response) => {
      this.cardsList = response;
    });
  }

  toggleFav(card: any) {
    card.checked = !card.checked;

    const index = this.selectedFav?.indexOf(card);
    if (index === -1) {
      this.selectedFav?.push(card);
    } else {
      this.selectedFav?.splice(index, 1);
    }

  }
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.closeFav.emit(false);
    this.favItemChanges.emit(this.selectedFav);
  }
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }
}
