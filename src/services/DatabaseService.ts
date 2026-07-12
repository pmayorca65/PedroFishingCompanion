import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

const sqlite = new SQLiteConnection(CapacitorSQLite);

let db: SQLiteDBConnection;

export async function initializeDatabase() {

  const isConn = await sqlite.isConnection("PedroFishingDB", false);

  if (isConn.result) {

    db = await sqlite.retrieveConnection(
      "PedroFishingDB",
      false
    );

  } else {

    db = await sqlite.createConnection(
      "PedroFishingDB",
      false,
      "no-encryption",
      1,
      false
    );

  }

  await db.open();

  await db.execute(`

    CREATE TABLE IF NOT EXISTS tackle (

      id TEXT PRIMARY KEY,

      category TEXT,

      type TEXT,

      style TEXT,

      brand TEXT,

      model TEXT,

      size TEXT,

      weight TEXT,

      length TEXT,

      depth TEXT,

      color TEXT,

      quantity INTEGER,

      notes TEXT,

      image TEXT,

      favorite INTEGER

    );

  `);

  console.log("✅ Database initialized");

}

export function getDatabase() {

  return db;

}