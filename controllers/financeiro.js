/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import serviceKiwifyFinanceiro from "../services/financeiro.js";
import configError from "../configs/error.js";

const nodeResponse = new NodeResponse();

/* ---- Methods ---- */

async function saldoParaSaque(_req, res) {
  try {
    const resultado = await serviceKiwifyFinanceiro.getSaldoParaSaque();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function totalVendido(_req, res) {
  try {
    const resultado = await serviceKiwifyFinanceiro.getTotalVendido();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

export default { saldoParaSaque, totalVendido };
