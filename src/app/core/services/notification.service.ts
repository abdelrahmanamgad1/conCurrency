import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { toastPayload } from '../interfaces/toastPayLoad';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {
    this.toastr.toastrConfig.enableHtml = true;
  }
  SetErrorMessage(toast: toastPayload) {
    this.toastr.show(
      toast.message,
      toast.title,
      toast.ic,
      'toast-' + toast.type
    );
  }
}
