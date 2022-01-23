import { Router } from "express";

const router = Router();

router.get("/reviews", (req, res) => res.send("reviews home route"));

export default router;
