/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const usuarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      default: "João Silva",
    },
    email: {
      type: String,
      default: "joao.silva@email.com",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Usuario", usuarioSchema);
