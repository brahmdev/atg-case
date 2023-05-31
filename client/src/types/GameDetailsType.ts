export interface GameDetailsType {
  "@type": string;
  id: string;
  status: string;
  pools: GameDetailsPools;
  races: Race[];
  currentVersion: number;
}

export interface GameDetailsPools {
  V86: PurpleV86;
}

export interface PurpleV86 {
  "@type": string;
  id: string;
  status: string;
  timestamp: Date | string;
  turnover: number;
  result: PurpleResult;
  harry: boolean;
  systemCount: number;
  payouts: { [key: string]: number };
  potentialPayoutRaceId: string;
}

export interface PurpleResult {
  "@type": string;
  payouts: { [key: string]: Payout };
}

export interface Payout {
  systems: number;
  payout: number;
}

export interface Race {
  id: string;
  date: Date;
  number: number;
  distance: number;
  startMethod: string;
  startTime: Date;
  scheduledStartTime: Date;
  prize: string;
  terms: string[];
  sport: string;
  track: Track;
  result: RaceResult;
  status: string;
  mediaId: string;
  pools: RacePools;
  starts: Start[];
  /*
   ** We need to add "subRows" property here with race.starts as value because
   *  react-table expects to have subRows as property when we need to show expandable rows
   */
  subRows?: Start[];
  name?: string;
  mergedPools?: MergedPool[];
}

export interface MergedPool {
  name: string;
  betTypes: string[];
}

export interface RacePools {
  vinnare: PurpleVinnare;
  plats: PurplePlats;
  tvilling: Komb;
  trio: Komb;
  V86?: FluffyV86;
  V75?: FluffyV86;
  komb?: Komb;
}

export interface FluffyV86 {
  "@type": string;
  result: FluffyResult;
}

export interface FluffyResult {
  "@type": string;
  systems: string;
  value: Value;
  winners: number[];
  reserveOrder: number[];
}

export interface Value {
  amount: number;
}

export interface Komb {
  "@type": string;
  id: string;
  status: string;
  timestamp: Date | string;
  turnover: number;
  result: KombResult;
}

export interface KombResult {
  "@type": string;
  winners: PurpleWinner[];
}

export interface PurpleWinner {
  combination: number[];
  odds: number;
}

export interface PurplePlats {
  "@type": string;
  id: string;
  status: string;
  timestamp: Date | string;
  turnover: number;
  result: PlatsResult;
}

export interface PlatsResult {
  "@type": string;
  winners: Winners;
}

export interface Winners {
  first: FirstElement[];
  second: FirstElement[];
  third: FirstElement[];
}

export interface FirstElement {
  number: number;
  odds: number;
}

export interface PurpleVinnare {
  "@type": string;
  id: string;
  status: string;
  timestamp: Date | string;
  turnover: number;
  result: VinnareResult;
}

export interface VinnareResult {
  "@type": string;
  winners: FirstElement[];
}

export interface RaceResult {
  scratchings?: number[];
  victoryMargin?: string;
}

export interface Start {
  number: number;
  postPosition: number;
  distance: number;
  horse: Horse;
  /*
   ** We need to add "subRows" property here with race.starts as value because
   *  react-table expects to have subRows as property when we need to show expandable rows
   */
  subRows?: Horse[];
  driver: Driver;
  result: StartResult;
  pools: StartPools;
  videos?: Video[];
  scratched?: boolean;
  out?: boolean;
  originalDriver?: OriginalDriver;
}

export interface Driver {
  id?: number;
  firstName: string;
  lastName: string;
  shortName: string;
  license: string;
  silks?: string;
  statistics?: DriverStatistics;
  level?: string;
  location?: string;
  birth?: number;
  homeTrack?: HomeTrack;
}

export interface HomeTrack {
  id: number;
  name: string;
}

export interface DriverStatistics {
  years: { [key: string]: Year };
}

export interface Year {
  starts: number;
  earnings: number;
  placement: { [key: string]: number };
  winPercentage?: number;
  records?: YearRecord[];
}

export interface YearRecord {
  code: string;
  startMethod: string;
  distance?: string;
  time: Time;
  place?: number;
}

export interface Time {
  minutes?: number;
  seconds?: number;
  tenths?: number;
  code?: string;
}

export interface Horse {
  name: string;
  nationality?: string;
  age: number;
  sex: string;
  record: YearRecord;
  trainer: Driver;
  shoes: Shoes;
  sulky: Sulky;
  money: number;
  color: string;
  owner: Breeder;
  statistics: HorseStatistics;
  pedigree: Pedigree;
  foreignOwned?: boolean;
  id?: number;
  breeder?: Breeder;
  homeTrack?: HomeTrack;
}

export interface Breeder {
  id?: number;
  name: string;
  location?: string;
}

export interface Pedigree {
  father: HorseParent;
  mother: HorseParent;
  grandfather: HorseParent;
}

export interface HorseParent {
  name: string;
  nationality?: string;
  id?: number;
}

export interface Shoes {
  reported: boolean;
  front?: Back;
  back?: Back;
}

export interface Back {
  hasShoe: boolean;
  changed?: boolean;
}

export interface HorseStatistics {
  years: { [key: string]: Year };
  life: Life;
  lastFiveStarts: LastFiveStarts;
}

export interface LastFiveStarts {
  averageOdds: number;
}

export interface Life {
  starts: number;
  earnings: number;
  placement: { [key: string]: number };
  records: LifeRecord[];
  winPercentage: number;
  placePercentage: number;
  earningsPerStart: number;
  startPoints: number;
}

export interface LifeRecord {
  code: string;
  startMethod: string;
  distance: string;
  time: Time;
  place?: number;
  year?: string;
}

export interface Sulky {
  reported: boolean;
  type?: Colour;
  colour?: Colour;
}

export interface Colour {
  code: string;
  text: string;
  engText: string;
  changed: boolean;
}

export interface OriginalDriver {
  id: number;
  firstName: string;
  lastName: string;
  shortName: string;
  license: string;
  silks: string;
  statistics: OriginalDriverStatistics;
}

export interface OriginalDriverStatistics {
  years: Years;
}

export interface Years {
  "2023": Year;
}

export interface StartPools {
  vinnare: FluffyVinnare;
  plats: FluffyPlats;
  V75?: TentacledV86;
  V86?: TentacledV86;
}

export interface TentacledV86 {
  "@type": string;
  betDistribution: number;
  potentialPayout?: PotentialPayout;
}

export interface PotentialPayout {
  value?: number;
  jackpot?: boolean;
}

export interface FluffyPlats {
  "@type": string;
  minOdds: number;
  maxOdds: number;
  odds?: number;
}

export interface FluffyVinnare {
  "@type": string;
  odds: number;
  finalOdds?: number;
}

export interface StartResult {
  place?: number;
  finishOrder?: number;
  kmTime?: Time;
  prizeMoney?: number;
  finalOdds: number;
  startNumber: number;
  galloped?: boolean;
  disqualified?: boolean;
}

export interface Video {
  mediaId: string;
  timestamp: Date | string;
}

export interface Track {
  id: number;
  name: string;
  countryCode: string;
  condition?: string;
}

export interface GameDetailsParams {
  gameId?: string;
}
