import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotificationService} from '../services/notification.service';

const toastrConfig: any = {
  timeOut: 5000,
  positionClass: 'toast-top-right',
  closeButton: true,
  progressBar: true,
  extendedTimeOut: 2000,
  disableTimeOut: false,
  progressAnimation: 'decreasing',
  enableHtml: true,
  toastClass: 'ngx-toastr',
};

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): any {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.notificationService.SetErrorMessage({
          message: 'try again',
          title: 'ERROR!',
          ic: toastrConfig,
          type: 'error',
        });

        return '';
      })
    );
  }
}
