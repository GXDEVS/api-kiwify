/* ---- Imports ---- */

import { Router } from 'express'
import controllerIndex from '../controllers/index.js'

/* ---- Routes ---- */

const router = Router()

router.get('/', controllerIndex.index)

export default router 