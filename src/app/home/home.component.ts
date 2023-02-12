import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { Race } from '../shared/models/race.model';
import { StandingsList } from '../shared/models/season.model';
import { App } from '../shared/store/app.action';
import { AppState } from '../shared/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showModal = false;
  @Select(AppState.standingList) seasonList$!: Observable<StandingsList[]>;
  races$!: Observable<Race[]>;
  driverId: string = "";

  constructor(private store: Store) { }


  private buildRacesSelector(year: string) {
    this.races$ = this.store.select(AppState.racesByYear).pipe(
      map(
        fn => fn(year).map(y => ({ ...y, highlighted: this.driverId === y.Results[0].Driver.driverId }))
      )
    );
  }

  reqeustSeasonDetail(season: string, driverId: string) {
    this.driverId = driverId;
    this.store.dispatch(new App.LoadRaces(season));
    this.buildRacesSelector(season);
    this.showModal = true
  }

}
