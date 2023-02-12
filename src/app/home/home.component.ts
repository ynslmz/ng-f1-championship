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

  @Select(AppState.standingList) seasonList$!: Observable<StandingsList>
  races$: Observable<Race[]>

  constructor(store: Store) {
    this.races$ = store.select(AppState.racesByYear).pipe(
      map(
        fn => fn('2008').races
      )
    )
    store.dispatch(new App.LoadRaces('2008', '200812r'));
  }
}
