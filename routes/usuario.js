/* ---- Imports ---- */

import { Router } from 'express'
import controllerUsuario from '../controllers/usuario.js'

/* ---- Routes ---- */

const router = Router()

router.get('/nome', controllerUsuario.nome)
router.get('/email', controllerUsuario.email)

export default router 