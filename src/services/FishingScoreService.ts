import type { WeatherData } from "./WeatherService";

export interface FishingScore {
  score: number;
  rating: string;
  reasons: string[];
}

export function calculateFishingScore(
  weather: WeatherData
): FishingScore {
  let score = 50;
  const reasons: string[] = [];

  if (weather.airTemperature >= 16 && weather.airTemperature <= 24) {
    score += 10;
    reasons.push("Good air temperature");
  }

  if (weather.waterTemperature >= 16 && weather.waterTemperature <= 22) {
    score += 15;
    reasons.push("Ideal water temperature");
  }

  if (weather.windSpeed >= 8 && weather.windSpeed <= 20) {
    score += 10;
    reasons.push("Good wind");
  }

  if (weather.cloudCover >= 30 && weather.cloudCover <= 80) {
    score += 8;
    reasons.push("Good cloud cover");
  }

  if (weather.pressure >= 1008 && weather.pressure <= 1022) {
    score += 8;
    reasons.push("Stable pressure");
  }

  if (weather.precipitation <= 20) {
    score += 5;
    reasons.push("Low chance of rain");
  }

  if (!weather.isDay) {
    score += 8;
    reasons.push("Night feeding period");
  }

  score = Math.max(0, Math.min(score, 100));

  let rating = "Poor";

  if (score >= 85) rating = "Excellent";
  else if (score >= 70) rating = "Good";
  else if (score >= 55) rating = "Fair";

  return {
    score,
    rating,
    reasons,
  };
}