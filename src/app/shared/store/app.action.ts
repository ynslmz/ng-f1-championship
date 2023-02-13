import { Race } from "../models/race.model"
import { StandingsList } from "../models/season.model"

export namespace App {
    export class LoadSeasons {
        static readonly type = "[App] Load Seasons"
        constructor() { }
    }

    export class LoadRaces {
        static readonly type = "[App] Load Races"
        constructor(public year: string) { }
    }


    export class LoadingStarted {
        static readonly type = '[Loading Interceptor] Loading Started'
        constructor(public url: string) { }
    }
    export class LoadingEnded {
        static readonly type = '[Loading Interceptor] Loading Ended'
        constructor(public url: string) { }
    }

    export class LogError {
        static readonly type = '[Api Service] Log Error'
        constructor(public error: Error) { }
    }
} 