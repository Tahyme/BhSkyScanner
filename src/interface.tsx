export interface Airport {
  PlaceId: string
  PlaceName: string
  LocalizedPlaceName: string
  CountryId: string
  CityId: string
  IataCode: string
  CountryName: string
  PlaceNameEn: string
  CityName: string
  CityNameEn: string
  GeoId: string
  GeoContainerId: string
  Location: string
  ResultingPhrase: string
  UntransliteratedResultingPhrase: string
}

export interface Flight {
  id: string
  price: Price
  legs: Legs
  is_eco_contender: boolean
  eco_contender_delta: number
  score: number
  totalDuration: number
}

export interface Price {
  amount: number
  update_status: string
  last_updated: string
  quote_age: number
  score: number
  transfer_type: string
}

export interface Legs {
  id: string
  origin: Origin
  destination: Destination
  departure: string
  arrival: string
  duration: number
  carriers: Carrier
  stop_count: number
  stops: number
}

export interface Origin {
  id: number
  entity_id: number
  alt_id: string
  parent_id: number
  parent_entity_id: number
  name: string
  type: string
  display_code: string
}

export interface Destination {
  id: number
  entity_id: number
  alt_id: string
  parent_id: number
  parent_entity_id: number
  name: string
  type: string
  display_code: string
}

export interface Carrier {
  id: number
  name: string
  alt_id: string
  display_code:string 
  display_code_type: string
}
