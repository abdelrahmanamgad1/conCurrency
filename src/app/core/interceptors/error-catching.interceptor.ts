import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import { ApiService } from '../services/api.service';
@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private apiErrorService: ApiService) {}
  
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      console.log("Passed through the interceptor in request");
      
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.apiErrorService.transformError(error);
      })
    );
  }
}
