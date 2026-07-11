import type { FishingItem } from "../types/FishingItem";
import { getDatabase } from "./DatabaseService";

export async function addItemToDatabase(item: FishingItem) {

    const db = getDatabase();

    await db.run(
        `INSERT INTO tackle
        (id, category, type, length, color, quantity, notes, image, favorite)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            item.id,
            item.category,
            item.type,
            item.length,
            item.color,
            item.quantity,
            item.notes,
            item.image,
            item.favorite ? 1 : 0
        ]
    );

}

export async function getItemsFromDatabase() {

    const db = getDatabase();

    const result = await db.query(
        "SELECT * FROM tackle ORDER BY category, type"
    );

    return result.values ?? [];

}

export async function updateFavorite(
    id: string,
    favorite: boolean
) {

    const db = getDatabase();

    await db.run(
        `UPDATE tackle
         SET favorite = ?
         WHERE id = ?`,
        [
            favorite ? 1 : 0,
            id
        ]
    );

}