/* ---- Imports ---- */

import { Router } from 'express'
import controllerRelatorio from '../controllers/relatorio.js'

/* ---- Routes ---- */

const router = Router()

router.get('/vendas', controllerRelatorio.vendas)

export default router 