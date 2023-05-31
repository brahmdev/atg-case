export interface BetDetails {
  betType: string;
  upcoming: Upcoming[];
  results: Result[];
}

export interface Result {
  id: string;
  tracks: Track[];
  totalToWin: number;
  startTime: Date;
}

export interface Track {
  id: number;
  name: string;
}

export interface Upcoming {
  id: string;
  startTime: Date;
  tracks: Track[];
  favorites: Favorite[];
  races: Race[];
}

export interface Favorite {
  raceId: string;
  legNumber: number;
  start: FavoriteStart;
}

export interface FavoriteStart {
  number: number;
  name: string;
  distribution: number;
}

export interface Race {
  id: string;
  starts: StartElement[];
}

export interface StartElement {
  number: number;
  horse: Horse;
}

export interface Horse {
  name: string;
}

export interface BetDetailsParams {
  betType: string;
}
