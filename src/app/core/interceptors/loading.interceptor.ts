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
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public store: Store) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.dispatch(new App.LoadingStarted(request.url));
    return next.handle(request).pipe(
      tap(
        {
          error: () => {
            this.store.dispatch(new App.LoadingEnded(request.url));
          },
          complete: () => {
            this.store.dispatch(new App.LoadingEnded(request.url));
          },
        }
      )
    );
  }
}
