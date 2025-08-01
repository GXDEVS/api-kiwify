/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const assinaturasSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      default: 150,
    },
    mrr: {
      type: Number,
      default: 7500.0,
    },
    churn: {
      type: Number,
      default: 5.2,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Assinaturas", assinaturasSchema);
