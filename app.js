/* ---- Imports ---- */

import dotenv from "dotenv";
import express from "express";
import configs from "./configs/index.js";
import server from "./bin/server.js";
import error from "./bin/error.js";

/* ---- App ---- */

dotenv.config();
const app = express();

// MongoDB temporariamente desabilitado - usando dados mockados
// configs.database.connect();

configs.middlewares.init(app, express);
configs.routes.register(app);

server.listen(app);
error.handle();

export default app;
