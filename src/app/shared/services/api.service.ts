import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

/// To handle base reqeirements, building the service, handling errors etc.
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}${path}`, { observe: 'response' })
      .pipe(
        catchError((err) => {
          // Handle error here
          console.error(err)
          return of(null)
        }),
        map((res) => {
          return res?.body || null as T;
        })
      );
  }
}