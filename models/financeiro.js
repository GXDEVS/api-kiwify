/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const financeiroSchema = new mongoose.Schema(
  {
    saldoParaSaque: {
      type: Number,
      default: 8500.0,
    },
    totalVendido: {
      type: Number,
      default: 15200.5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Financeiro", financeiroSchema);
