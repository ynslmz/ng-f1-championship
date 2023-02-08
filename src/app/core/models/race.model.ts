export interface RaceTable {
    season: string;
    position: string;
    Races: Race[];
}

export interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: Date;
    time: string;
    Results: Result[];
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Result {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: Driver;
    Constructor: Constructor;
    grid: string;
    laps: string;
    status: string;
    Time: ResultTime;
    FastestLap: FastestLap;
}

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: Date;
    nationality: string;
}

export interface FastestLap {
    rank: string;
    lap: string;
    Time: FastestLapTime;
    AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
    units: string;
    speed: string;
}


export interface FastestLapTime {
    time: string;
}

export interface ResultTime {
    millis: string;
    time: string;
}

