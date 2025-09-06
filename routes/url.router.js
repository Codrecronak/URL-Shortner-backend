import express from "express";
import { handleGenerateNewShortURL } from "../controllers/url.controller.js";
import { getAnalytics } from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", getAnalytics);

export default router;
