import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { App } from 'src/app/shared/store/app.action';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap({
      error: (error) => {
        this.store.dispatch(new App.LogError(error))
      }
    })
    );
  }
}
