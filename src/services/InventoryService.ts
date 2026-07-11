import type { FishingItem } from "../types/FishingItem";

const STORAGE_KEY = "pedro-fishing-inventory";

export function getInventory(): FishingItem[] {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    return JSON.parse(data);

}

export function addItem(item: FishingItem) {

    const inventory = getInventory();

    inventory.push(item);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(inventory)
    );

}

export function clearInventory() {

    localStorage.removeItem(STORAGE_KEY);

}