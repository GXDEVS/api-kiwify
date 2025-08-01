/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const vendasSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      default: 15200.5,
    },
    reembolso: {
      type: Number,
      default: 500.0,
    },
    kiwifyClick: {
      type: Number,
      default: 1500,
    },
    quantidade: {
      type: Number,
      default: 45,
    },
    cartao: {
      chargeback: {
        type: Number,
        default: 200.0,
      },
      total: {
        type: Number,
        default: 12000.0,
      },
    },
    boleto: {
      gerados: {
        type: Number,
        default: 25,
      },
      total: {
        type: Number,
        default: 3200.5,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vendas", vendasSchema);
