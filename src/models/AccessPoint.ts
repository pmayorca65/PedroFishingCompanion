export interface AccessPoint {
  id: string;

  name: string;

  latitude: number;
  longitude: number;

  parking: boolean;

  walkingDistance: number;

  shoreType:
    | "Rock"
    | "Sand"
    | "Grass"
    | "Concrete"
    | "Mixed";

  structure: string[];

  castDirections: string[];

  averageDepth: number;

  species: string[];

  techniques: string[];

  recommendedLures: string[];

  notes: string;
}