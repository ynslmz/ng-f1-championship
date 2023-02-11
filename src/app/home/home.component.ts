import { Component } from '@angular/core';
import { Race } from '../core/models/race.model';
import { StandingsList } from '../core/models/season.model';
import { RaceService } from '../core/services/race.service';
import { SeasonService } from '../core/services/season.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  seasonList!: StandingsList[];
  races!: Race[]
  constructor(seasonService: SeasonService, race: RaceService) {
    seasonService.getSeasons().subscribe((res) => this.seasonList = res)
    race.getRaceList('2008').subscribe(res => this.races = res)
  }


}
