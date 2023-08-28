import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { CurrencyCardModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {
  @Input() cardsList: CurrencyCardModel[] = [];
  @Output() closeFav = new EventEmitter<boolean>();
  @Output() favItemChanges = new EventEmitter<any>();

   selectedFav: string[] = [];
  baseCurrency = "USD";

  constructor(private apiServise: ApiService) {
  //  this.baseCurrency = localStorage.getItem('baseCurrency');

  }
  toggleFav(card: CurrencyCardModel) {
    card.checked = !card.checked;
    const index = this.selectedFav?.indexOf(card.countryTitle);
    if (index === -1) {
      // Element doesn't exist in the array, so push it
      this.selectedFav?.push(card.countryTitle);
    } else {
      // Element exists in the array, so remove it
      this.selectedFav?.splice(index, 1);
    }

    console.log(this.selectedFav);

    // this.favItemChanges.emit(card);
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }
  closePopup() {
    this.closeFav.emit(false);
  
    // this.apiServise.postData(this.selectedFav,this.baseCurrency).subscribe((response) => {
    //   // Handle the response here
    // });
    this.favItemChanges.emit('test');
//     const jsonString = JSON.stringify(this.selectedFav);
// localStorage.setItem("myArrayKey", jsonString)
  }
  // postData() {
  //   const requestBody = { /* Your request body data */ };

  //   this.apiService.postData(requestBody).subscribe(
  //     (response) => {
  //       // Handle the response here
  //       console.log('Response:', response);
  //     },
  //     (error) => {
  //       // Handle any errors here
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}
