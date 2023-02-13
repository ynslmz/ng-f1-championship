import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

/// To handle base reqeirements, building the service
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}${path}`, { observe: 'response' })
      .pipe(
        map((res) => {
          return res?.body || null as T;
        })
      );
  }
}