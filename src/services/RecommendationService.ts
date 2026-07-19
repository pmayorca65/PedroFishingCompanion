import type { Recommendation } from "../models/Recommendation";
import { getBestRecommendation } from "./RecommendationEngine";

export type { Recommendation };

export function getRecommendation(): Recommendation {
  return getBestRecommendation();
}

export function refreshRecommendation(): Recommendation {
  return getBestRecommendation();
}