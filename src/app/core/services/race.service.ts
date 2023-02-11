import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Race } from '../models/race.model';
import { Main } from '../models/api-response.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  getRaceList(year: string): Observable<Race[]> {
    return this.get<Main>(`${year}/results/1.json`).pipe(
      map((res: Main) => {
        return res.MRData.RaceTable.Races
      })
    );
  }
}
