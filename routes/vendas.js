/* ---- Imports ---- */

import { Router } from "express";
import controllerVendas from "../controllers/vendas.js";

/* ---- Routes ---- */

const router = Router();

router.get("/total", controllerVendas.total);
router.get("/reembolso", controllerVendas.reembolso);
router.get("/kiwify-click", controllerVendas.kiwifyClick);
router.get("/quantidade", controllerVendas.quantidade);
router.get("/cartao/chargeback", controllerVendas.cartaoChargeback);
router.get("/cartao/total", controllerVendas.cartaoTotal);
router.get("/boleto/gerados", controllerVendas.boletoGerados);
router.get("/boleto/total", controllerVendas.boletoTotal);

export default router;
