/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const empresaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      default: "Minha Empresa LTDA",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Empresa", empresaSchema);
