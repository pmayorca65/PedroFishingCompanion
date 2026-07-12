import type { FishingItem } from "../types/FishingItem";
import { getDatabase } from "./DatabaseService";

export async function addItemToDatabase(item: FishingItem) {

    const db = getDatabase();

    await db.run(

        `INSERT INTO tackle (

            id,
            category,
            type,
            style,
            brand,
            model,
            size,
            weight,
            length,
            depth,
            color,
            quantity,
            notes,
            image,
            favorite

        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

        [

            item.id,
            item.category,
            item.type,
            item.style,
            item.brand,
            item.model,
            item.size,
            item.weight,
            item.length,
            item.depth,
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

export async function getItemById(id: string) {

    const db = getDatabase();

    const result = await db.query(

        "SELECT * FROM tackle WHERE id = ?",

        [id]

    );

    return result.values?.[0] ?? null;

}

export async function updateItem(item: FishingItem) {

    const db = getDatabase();

    await db.run(

        `UPDATE tackle

        SET

            category = ?,
            type = ?,
            style = ?,
            brand = ?,
            model = ?,
            size = ?,
            weight = ?,
            length = ?,
            depth = ?,
            color = ?,
            quantity = ?,
            notes = ?,
            image = ?,
            favorite = ?

        WHERE id = ?`,

        [

            item.category,
            item.type,
            item.style,
            item.brand,
            item.model,
            item.size,
            item.weight,
            item.length,
            item.depth,
            item.color,
            item.quantity,
            item.notes,
            item.image,
            item.favorite ? 1 : 0,
            item.id

        ]

    );

}

export async function deleteItem(id: string) {

    const db = getDatabase();

    await db.run(

        `DELETE FROM tackle
         WHERE id = ?`,

        [id]

    );

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