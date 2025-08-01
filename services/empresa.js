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

async function getNome() {
  try {
    const data = await loadData();
    return data.empresa.nome;
  } catch (error) {
    throw new Error("Erro ao buscar nome da empresa");
  }
}

export default {
  getNome,
};
