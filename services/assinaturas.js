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
    return data.assinaturas.total;
  } catch (error) {
    throw new Error("Erro ao buscar total de assinaturas");
  }
}

async function getMrr() {
  try {
    const data = await loadData();
    return data.assinaturas.mrr;
  } catch (error) {
    throw new Error("Erro ao buscar MRR");
  }
}

async function getChurn() {
  try {
    const data = await loadData();
    return data.assinaturas.churn;
  } catch (error) {
    throw new Error("Erro ao buscar dados de churn");
  }
}

export default {
  getTotal,
  getMrr,
  getChurn,
};
