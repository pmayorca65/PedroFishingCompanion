export interface Recommendation {
  lakeId: string;
  lakeName: string;

  accessPointId: string;
  accessPointName: string;

  latitude: number;
  longitude: number;

  parking: boolean;

  walkingDistance: number;

  score: number;

  species: string;

  technique: string;

  lure: string;

  depth: string;

  bestTime: string;

  reason: string[];

  confidence: "Low" | "Medium" | "High";
}