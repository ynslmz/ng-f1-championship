import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Race } from '../models/race.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getRaceList(year: string): Observable<Race[]> {
    return this.get(`${year}/results/1.json`).pipe(
      map((res: any) => {
        return res.MRData.RaceTable.Races
      })
    );
  }
}
