import type { AccessPoint } from "./AccessPoint";

export interface Lake {
  id: string;

  name: string;

  latitude: number;
  longitude: number;

  species: string[];

  shoreFishing: boolean;

  parking: boolean;

  averageDepth: number;

  bottomType:
    | "Rock"
    | "Sand"
    | "Mud"
    | "Mixed";

  weeds:
    | "None"
    | "Light"
    | "Moderate"
    | "Heavy";

  current:
    | "None"
    | "Slow"
    | "Moderate"
    | "Fast";

  bestMonths: number[];

  bestWindDirections: string[];

  techniques: string[];

  recommendedLures: string[];

  notes: string;

  accessPoints: AccessPoint[];
}