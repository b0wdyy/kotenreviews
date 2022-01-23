import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => res.send("users index route"));

export default router;
