import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from 'src/app/core/services/api.service';
import {CurrencyCardModel} from 'src/app/models/data.model';
import {CountryFav} from "../../core/interfaces/currency.model";

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {
    @Output() closeFav = new EventEmitter<boolean>();
    @Output() favItemChanges = new EventEmitter<any>();
    selectedFav: CountryFav[] = [];
    baseCurrency = 'USD';

    constructor(private apiServise: ApiService) {
        if (localStorage.getItem('selectedFav')) {
            this.selectedFav = JSON.parse(localStorage.getItem('selectedFav')!)
        } else {
            this.apiServise.countries.forEach((country) => {
                this.selectedFav.push({...country, checked: false});
            })
        }

    }

    toggleFav(event: any,index:number) {
        console.log(event)
     this.selectedFav[index].checked=  event.currentTarget.checked

        // this.favItemChanges.emit(card);
    }

    ngOnInit(): void {
        document.body.style.overflow = 'hidden';
    }

    closePopup() {
        this.closeFav.emit(false);
        localStorage.setItem('selectedFav', JSON.stringify(this.selectedFav))
        this.favItemChanges.emit(this.selectedFav);
    }

    ngOnDestroy(): void {
        document.body.style.overflow = 'auto';
    }

}
