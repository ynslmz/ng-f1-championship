import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';
import { Race } from '../models/race.model';
import { StandingsList } from '../models/season.model';
import { RaceService } from '../services/race.service';
import { SeasonService } from '../services/season.service';
import { App } from './app.action';

export interface AppStateModel {
    loading: boolean;
    error: any;
    standingList: StandingsList[];
    racesByYear: {
        [key: string]: Race[]
    }
}

const defaultState: AppStateModel = {
    loading: false,
    error: null,
    standingList: [],
    racesByYear: {}
}

@State<AppStateModel>({
    name: 'app',
    defaults: defaultState
})
@Injectable()
export class AppState {

    constructor(private seasonService: SeasonService, private raceService: RaceService) { }

    @Action(App.LoadSeasons)
    loadSeasons(ctx: StateContext<AppStateModel>) {
        lastValueFrom(this.seasonService.getSeasons()).then((res) => {
            ctx.setState({
                ...ctx.getState(),
                standingList: res
            })
        })
    }

    @Action(App.LoadRaces)
    loadRaces(ctx: StateContext<AppStateModel>, action: App.LoadRaces) {
        let state = ctx.getState()
        if (!state.racesByYear[action.year]) {
            lastValueFrom(this.raceService.getRaceList(action.year)).then((res) => {
                ctx.setState({
                    ...ctx.getState(),
                    racesByYear: {
                        ...state.racesByYear,
                        [action.year]: res
                    }
                })
            })
        }
        return;
    }


    @Selector()
    static standingList(state: AppStateModel) {
        return state.standingList || []
    }

    @Selector()
    static racesByYear(state: AppStateModel) {
        return (year: string) => {
            return state.racesByYear[year] || []
        }
    }

}