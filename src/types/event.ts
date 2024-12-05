export type NewEventType = {
  name: string;
  description: string;
  location: string;
  timeStart: Date;
  timeEnd: Date;
};

export type RequestSearchLocation = {
  keyword?: string;
  polygon_geojson?: number;
};
export interface LocationType {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  category: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
  geojson: Geojson;
}

export interface Geojson {
  type: string;
  coordinates: Array<number[]>;
}
