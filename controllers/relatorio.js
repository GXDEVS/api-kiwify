/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import serviceKiwifyRelatorio from "../services/relatorio.js";
import configError from "../configs/error.js";

const nodeResponse = new NodeResponse();

/* ---- Methods ---- */

async function vendas(_req, res) {
  try {
    const resultado = await serviceKiwifyRelatorio.getVendas();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

export default { vendas };
