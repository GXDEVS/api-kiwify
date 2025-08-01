/* ---- Imports ---- */

import { Router } from 'express'
import controllerAssinaturas from '../controllers/assinaturas.js'

/* ---- Routes ---- */

const router = Router()

router.get('/total', controllerAssinaturas.total)
router.get('/mrr', controllerAssinaturas.mrr)
router.get('/churn', controllerAssinaturas.churn)

export default router 