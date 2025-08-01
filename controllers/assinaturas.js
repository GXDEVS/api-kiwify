/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import serviceKiwifyAssinaturas from "../services/assinaturas.js";
import configError from "../configs/error.js";

const nodeResponse = new NodeResponse();

/* ---- Methods ---- */

async function total(_req, res) {
  try {
    const resultado = await serviceKiwifyAssinaturas.getTotal();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function mrr(_req, res) {
  try {
    const resultado = await serviceKiwifyAssinaturas.getMrr();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function churn(_req, res) {
  try {
    const resultado = await serviceKiwifyAssinaturas.getChurn();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

export default { total, mrr, churn };
