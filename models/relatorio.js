/* ---- Imports ---- */

import mongoose from "mongoose";

/* ---- Schema ---- */

const relatorioSchema = new mongoose.Schema(
  {
    vendas: [
      {
        total: {
          type: Number,
          required: true,
        },
        data: {
          type: String,
          required: true,
        },
        quantidade: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Dados padrão para o relatório
relatorioSchema.pre("save", function (next) {
  if (this.vendas.length === 0) {
    this.vendas = [
      {
        total: 152,
        data: "05/14",
        quantidade: 1,
      },
      {
        total: 512,
        data: "05/15",
        quantidade: 3,
      },
      {
        total: 320,
        data: "05/16",
        quantidade: 2,
      },
    ];
  }
  next();
});

export default mongoose.model("Relatorio", relatorioSchema);
