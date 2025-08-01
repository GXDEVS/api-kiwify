/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Constants ---- */

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";

/* ---- Methods ---- */

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("# MongoDB conectado com sucesso!");
  } catch (error) {
    console.warn(
      "# Aviso: MongoDB não está disponível. Servidor continuará sem banco de dados."
    );
    console.warn("# Erro:", error.message);
  }
}

function disconnect() {
  return mongoose.disconnect();
}

export default { connect, disconnect };
