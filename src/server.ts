import dotenv from "dotenv";

dotenv.config();

import path from "path";
import express from "express";

import app from "./app";
import { connectDatabase } from "./config/database";

const PORT = Number(process.env.PORT) || 3000;

const startServer = async () => {
  try {
    // MongoDB
    await connectDatabase();

    // ========================================
    // React Client
    // ========================================

    const clientPath = path.join(
      process.cwd(),
      "client",
      "dist"
    );

    // Serve React static files
    app.use(
      express.static(clientPath)
    );

    // React SPA
    app.get("{*splat}", (req, res) => {
      res.sendFile(
        path.join(
          clientPath,
          "index.html"
        )
      );
    });

    // ========================================
    // Start Server
    // ========================================

    app.listen(PORT, () => {
      console.log(
        `Server running: http://localhost:${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "Server startup failed:",
      error
    );

    process.exit(1);
  }
};

startServer();