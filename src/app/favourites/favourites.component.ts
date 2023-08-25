import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
    providers: [DialogService, MessageService]
})
export class FavouritesComponent implements OnDestroy {
    
    constructor(public dialogService: DialogService, public messageService: MessageService) {}

    ref: DynamicDialogRef | undefined;

    
    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}
