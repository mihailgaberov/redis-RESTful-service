import { Router } from "express";
import { songRepository as repository } from "./song-repository.js";

export let router = Router();

router.put("/", async (req, res) => {
  // create the Song so we can save it
  let song = repository.createEntity();

  // set all the properties, converting missing properties to null
  song.title = req.body.title ?? null;
  song.artist = req.body.artist ?? null;
  song.genres = req.body.genres ?? null;
  song.lyrics = req.body.lyrics ?? null;
  song.music = req.body.music ?? null;
  song.year = req.body.year ?? null;
  song.duration = req.body.duration ?? null;
  song.link = req.body.link ?? null;

  // save the Song to Redis
  let id = await repository.save(song);

  // return the id of the newly created Song
  res.send({ id });
});
