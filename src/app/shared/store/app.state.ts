import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';
import { Race } from '../models/race.model';
import { StandingsList } from '../models/season.model';
import { RaceService } from '../services/race.service';
import { SeasonService } from '../services/season.service';
import { App } from './app.action';

export interface AppStateModel {
    loadingUrls: string[];
    error: any;
    standingList: StandingsList[];
    racesByYear: {
        [key: string]: Race[]
    }
}

const defaultState: AppStateModel = {
    loadingUrls: [],
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
            ctx.patchState({
                standingList: res
            })
        })
    }

    @Action(App.LoadRaces)
    loadRaces(ctx: StateContext<AppStateModel>, action: App.LoadRaces) {
        let state = ctx.getState()
        if (!state.racesByYear[action.year]) {
            lastValueFrom(this.raceService.getRaceList(action.year)).then((res) => {
                ctx.patchState({
                    racesByYear: {
                        ...state.racesByYear,
                        [action.year]: res
                    }
                })
            })
        }
        return;
    }

    @Action(App.LoadingStarted)
    loadingStarted(ctx: StateContext<AppStateModel>, action: App.LoadingStarted) {
        let state = ctx.getState()
        ctx.patchState({
            loadingUrls: [...state.loadingUrls, action.url]
        })
    }

    @Action(App.LoadingEnded)
    loadingEnded(ctx: StateContext<AppStateModel>, action: App.LoadingEnded) {
        let loadingUrls = [...ctx.getState().loadingUrls]
        const index = loadingUrls.findIndex(u => u === action.url);
        loadingUrls.splice(index, 1)
        ctx.patchState({
            loadingUrls: [...loadingUrls]
        })
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

    @Selector()
    static selectIsLoading(state: AppStateModel) {
        return state.loadingUrls.length > 0
    }

}