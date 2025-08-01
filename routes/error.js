/* ---- Imports ---- */

import { Router } from "express";
import controllerError from "../controllers/error.js";

/* ---- Routes ---- */

const router = Router();

router.use("/*", controllerError.notFound);

export default router;
