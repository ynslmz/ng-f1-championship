import { RaceTable } from "./race.model";
import { StandingsTable } from "./season.model";

export interface Main {
    MRData: MRData;
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: RaceTable;
    StandingsTable: StandingsTable;
}