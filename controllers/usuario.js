/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import serviceKiwifyUsuario from "../services/usuario.js";
import configError from "../configs/error.js";

const nodeResponse = new NodeResponse();

/* ---- Methods ---- */

async function nome(_req, res) {
  try {
    const resultado = await serviceKiwifyUsuario.getNome();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function email(_req, res) {
  try {
    const resultado = await serviceKiwifyUsuario.getEmail();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

export default { nome, email };
