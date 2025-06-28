import express from "express";
import verifySignature from "../middlewares/verifySignature.js";
import githubHandler from "../services/githubHandler.js";

const router = express.Router();

router.post("/", verifySignature, githubHandler);

export default router;
