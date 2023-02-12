import { Race } from "../models/race.model"
import { StandingsList } from "../models/season.model"

export namespace App {
    export class LoadSeasons {
        static readonly type = "[App] Load Seasons"
        constructor() { }
    }

    export class LoadRaces {
        static readonly type = "[App] Load Races"
        constructor(public year: string, public driverId: string) { }
    }
} 