/* ---- Imports ---- */

import nodeMorgan from 'densyy-node-toolbox/core/middlewares/node-morgan.js'
import nodeCors from 'densyy-node-toolbox/core/middlewares/node-cors.js'
import nodeHelmet from 'densyy-node-toolbox/core/middlewares/node-helmet.js'

/* ---- Constants ---- */

const urlEncodedOptions = { extended: false }

/* ---- Methods ---- */

function init (app, express) {
  app.use(express.json())
  app.use(express.urlencoded(urlEncodedOptions))
  app.use(nodeCors)
  app.use(nodeHelmet)
  app.use(nodeMorgan)
}

export default { init } 