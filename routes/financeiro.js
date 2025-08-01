/* ---- Imports ---- */

import { Router } from 'express'
import controllerFinanceiro from '../controllers/financeiro.js'

/* ---- Routes ---- */

const router = Router()

router.get('/saldo-para-saque', controllerFinanceiro.saldoParaSaque)
router.get('/total-vendido', controllerFinanceiro.totalVendido)

export default router 