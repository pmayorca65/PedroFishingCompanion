import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { initializeDatabase } from "./services/DatabaseService";

async function startApp() {
  try {
    await initializeDatabase();
    console.log("✅ SQLite ready");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

startApp();