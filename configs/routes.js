/* ---- Imports ---- */

import routeIndex from "../routes/index.js";
import routeError from "../routes/error.js";
import routeVendas from "../routes/vendas.js";
import routeFinanceiro from "../routes/financeiro.js";
import routeAssinaturas from "../routes/assinaturas.js";
import routeEmpresa from "../routes/empresa.js";
import routeUsuario from "../routes/usuario.js";
import routeRelatorio from "../routes/relatorio.js";

/* ---- Methods ---- */

function register(app) {
  app.use("/", routeIndex);

  app.use("/vendas", routeVendas);
  app.use("/financeiro", routeFinanceiro);
  app.use("/assinaturas", routeAssinaturas);
  app.use("/empresa", routeEmpresa);
  app.use("/usuario", routeUsuario);
  app.use("/relatorio", routeRelatorio);

  app.use("/", routeError);
}

export default { register };
