import { Router } from "express";
import {
  generateImage,
  generateVideo,
} from "../services/higgsfieldGeneration.service";

export const generationRouter = Router();

generationRouter.post("/image", async (req, res) => {
  const result = await generateImage(String(req.body?.prompt ?? "").trim());

  if (result.outputUrl) {
    res.json({ outputUrl: result.outputUrl });
  } else {
    res.status(422).json({ error: result.error });
  }
});

generationRouter.post("/video", async (req, res) => {
  const result = await generateVideo(
    String(req.body?.prompt ?? "").trim(),
    String(req.body?.imageUrl ?? "").trim(),
  );

  if (result.outputUrl) {
    res.json({ outputUrl: result.outputUrl });
  } else {
    res.status(422).json({ error: result.error });
  }
});
