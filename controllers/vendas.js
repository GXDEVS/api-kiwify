/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import serviceKiwifyVendas from "../services/vendas.js";
import configError from "../configs/error.js";

const nodeResponse = new NodeResponse();

/* ---- Methods ---- */

async function total(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getTotal();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function reembolso(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getReembolso();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function kiwifyClick(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getKiwifyClick();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function quantidade(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getQuantidade();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function cartaoChargeback(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getCartaoChargeback();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function cartaoTotal(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getCartaoTotal();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function boletoGerados(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getBoletoGerados();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

async function boletoTotal(_req, res) {
  try {
    const resultado = await serviceKiwifyVendas.getBoletoTotal();
    return nodeResponse.success(res, resultado);
  } catch (error) {
    console.log(error);
    return configError.capture(res, error);
  }
}

export default {
  total,
  reembolso,
  kiwifyClick,
  quantidade,
  cartaoChargeback,
  cartaoTotal,
  boletoGerados,
  boletoTotal,
};
