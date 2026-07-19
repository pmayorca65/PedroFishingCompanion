import { LakeDatabase } from "../data/LakeDatabase";
import type { Recommendation } from "../models/Recommendation";

function monthScore(month: number, bestMonths: number[]): number {
  if (bestMonths.includes(month)) return 25;

  let closest = 99;

  for (const m of bestMonths) {
    const d = Math.abs(month - m);
    if (d < closest) closest = d;
  }

  if (closest === 1) return 15;
  if (closest === 2) return 8;

  return 0;
}

function timeScore(hour: number): number {
  if (hour >= 5 && hour <= 9) return 20;
  if (hour >= 18 && hour <= 21) return 20;
  if (hour >= 10 && hour <= 17) return 10;
  return 4;
}

function windScore(bestWindDirections: string[]): number {
  // Temporary until live weather is connected
  const wind = "W";
  return bestWindDirections.includes(wind) ? 10 : 0;
}

function structureScore(structure: string[]): number {
  let score = 0;

  if (structure.includes("Current")) score += 10;
  if (structure.includes("Drop-off")) score += 8;
  if (structure.includes("Pier")) score += 6;
  if (structure.includes("Rock")) score += 5;
  if (structure.includes("Weeds")) score += 4;

  return score;
}

function depthScore(depth: number): number {
  if (depth >= 2 && depth <= 5) return 10;
  if (depth > 5 && depth <= 8) return 7;
  if (depth > 8 && depth <= 12) return 5;
  return 2;
}

function currentScore(current: string): number {
  switch (current.toLowerCase()) {
    case "moderate":
      return 10;

    case "slow":
      return 8;

    case "fast":
      return 6;

    case "none":
      return 3;

    default:
      return 5;
  }
}

function bottomScore(bottom: string): number {
  switch (bottom.toLowerCase()) {
    case "rock":
      return 10;

    case "mixed":
      return 8;

    case "gravel":
      return 7;

    case "sand":
      return 5;

    case "mud":
      return 3;

    default:
      return 5;
  }
}

function weedScore(weeds: string): number {
  switch (weeds.toLowerCase()) {
    case "light":
      return 8;

    case "moderate":
      return 10;

    case "heavy":
      return 5;

    case "none":
      return 2;

    default:
      return 4;
  }
}

export function getBestRecommendation(): Recommendation {
  const now = new Date();

  const month = now.getMonth() + 1;
  const hour = now.getHours();

  let best: Recommendation | null = null;
  let bestScore = -1;

  for (const lake of LakeDatabase) {
    for (const ap of lake.accessPoints) {
      let score = 0;
      const reason: string[] = [];

      const season = monthScore(month, lake.bestMonths);
      score += season;
      reason.push(`Season +${season}`);

      const time = timeScore(hour);
      score += time;
      reason.push(`Time +${time}`);

      const wind = windScore(lake.bestWindDirections);
      score += wind;
      reason.push(`Wind +${wind}`);

      const structure = structureScore(ap.structure);
      score += structure;
      reason.push(`Structure +${structure}`);

      const depth = depthScore(ap.averageDepth);
      score += depth;
      reason.push(`Depth +${depth}`);

      const current = currentScore(lake.current);
      score += current;
      reason.push(`Current +${current}`);

      const bottom = bottomScore(lake.bottomType);
      score += bottom;
      reason.push(`Bottom +${bottom}`);

      const weeds = weedScore(lake.weeds);
      score += weeds;
      reason.push(`Weeds +${weeds}`);

      const species = Math.min(ap.species.length * 4, 20);
      score += species;
      reason.push(`Species +${species}`);

      const techniques = Math.min(ap.techniques.length * 2, 10);
      score += techniques;
      reason.push(`Techniques +${techniques}`);

      const lures = Math.min(ap.recommendedLures.length, 6);
      score += lures;
      reason.push(`Lures +${lures}`);

      if (ap.parking) {
        score += 5;
        reason.push("Parking +5");
      }

      if (ap.walkingDistance <= 50) {
        score += 6;
        reason.push("Easy walk +6");
      } else if (ap.walkingDistance <= 100) {
        score += 4;
        reason.push("Short walk +4");
      } else if (ap.walkingDistance <= 250) {
        score += 2;
        reason.push("Walk +2");
      }

      if (score > bestScore) {
        bestScore = score;

        best = {
          lakeId: lake.id,
          lakeName: lake.name,

          accessPointId: ap.id,
          accessPointName: ap.name,

          latitude: ap.latitude,
          longitude: ap.longitude,

          parking: ap.parking,
          walkingDistance: ap.walkingDistance,

          score,

          species: ap.species[0] ?? "Unknown",

          technique: ap.techniques[0] ?? "Unknown",

          lure: ap.recommendedLures[0] ?? "Unknown",

          depth: `${ap.averageDepth} m`,

          bestTime:
            hour < 10
              ? "Morning"
              : hour < 17
              ? "Afternoon"
              : "Evening",

          reason,

          confidence:
            score >= 115
              ? "High"
              : score >= 90
              ? "Medium"
              : "Low",
        };
      }
    }
  }

  if (!best) {
    throw new Error("No fishing access points found.");
  }

  return best;
}