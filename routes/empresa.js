/* ---- Imports ---- */

import { Router } from 'express'
import controllerEmpresa from '../controllers/empresa.js'

/* ---- Routes ---- */

const router = Router()

router.get('/nome', controllerEmpresa.nome)

export default router 