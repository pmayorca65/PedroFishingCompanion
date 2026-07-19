export interface Species {
  id: string;

  name: string;

  activeMonths: number[];

  preferredWaterTempMin: number;
  preferredWaterTempMax: number;

  preferredWindDirections: string[];

  preferredDepthMin: number;
  preferredDepthMax: number;

  feedingTimes: string[];

  recommendedTechniques: string[];

  recommendedLures: string[];

  notes: string;
}