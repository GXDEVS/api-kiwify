/* ---- Imports ---- */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---- Methods ---- */

async function loadData() {
  try {
    const dataPath = path.join(__dirname, "../data/mock-data.json");
    const data = await fs.readFile(dataPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Erro ao carregar dados mockados");
  }
}

async function getTotal() {
  try {
    const data = await loadData();
    return data.vendas.total;
  } catch (error) {
    throw new Error("Erro ao buscar total de vendas");
  }
}

async function getReembolso() {
  try {
    const data = await loadData();
    return data.vendas.reembolso;
  } catch (error) {
    throw new Error("Erro ao buscar dados de reembolso");
  }
}

async function getKiwifyClick() {
  try {
    const data = await loadData();
    return data.vendas.kiwifyClick;
  } catch (error) {
    throw new Error("Erro ao buscar dados de Kiwify Click");
  }
}

async function getQuantidade() {
  try {
    const data = await loadData();
    return data.vendas.quantidade;
  } catch (error) {
    throw new Error("Erro ao buscar quantidade de vendas");
  }
}

async function getCartaoChargeback() {
  try {
    const data = await loadData();
    return data.vendas.cartaoChargeback;
  } catch (error) {
    throw new Error("Erro ao buscar dados de chargeback de cartão");
  }
}

async function getCartaoTotal() {
  try {
    const data = await loadData();
    return data.vendas.cartaoTotal;
  } catch (error) {
    throw new Error("Erro ao buscar total de vendas por cartão");
  }
}

async function getBoletoGerados() {
  try {
    const data = await loadData();
    return data.vendas.boletoGerados;
  } catch (error) {
    throw new Error("Erro ao buscar quantidade de boletos gerados");
  }
}

async function getBoletoTotal() {
  try {
    const data = await loadData();
    return data.vendas.boletoTotal;
  } catch (error) {
    throw new Error("Erro ao buscar total de vendas por boleto");
  }
}

export default {
  getTotal,
  getReembolso,
  getKiwifyClick,
  getQuantidade,
  getCartaoChargeback,
  getCartaoTotal,
  getBoletoGerados,
  getBoletoTotal,
};
