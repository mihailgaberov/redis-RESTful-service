import express from "express";
import { router as songRouter } from "./song-router.js";
import { router as songsRouter } from "./songs-router.js";

// Create an express app and use JSON
let app = new express();
app.use(express.json());

// Bring in some routers
app.use("/song", songRouter);
app.use("/songs", songsRouter);

// Setup the root level GET to return name and version from package.json
app.get("/", (req, res) => {
  res.send({
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  });
});

// Start listening
app.listen(8081);
