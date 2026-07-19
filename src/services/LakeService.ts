import { LakeDatabase } from "../data/LakeDatabase";

import type { Lake } from "../models/Lake";

export function getAllLakes(): Lake[] {
  return LakeDatabase;
}

export function getLakeById(id: string): Lake | undefined {
  return LakeDatabase.find((lake) => lake.id === id);
}

export function getLakesBySpecies(species: string): Lake[] {
  return LakeDatabase.filter((lake) =>
    lake.species.includes(species)
  );
}

export function getShoreFishingLakes(): Lake[] {
  return LakeDatabase.filter((lake) => lake.shoreFishing);
}

export function getParkingLakes(): Lake[] {
  return LakeDatabase.filter((lake) => lake.parking);
}