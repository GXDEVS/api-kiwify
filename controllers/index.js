/* ---- Imports ---- */

import NodeResponse from 'densyy-node-toolbox/core/tools/node-response.js'
import packageJson from '../package.json' with { type: 'json' }

const nodeResponse = new NodeResponse()

/* ---- Methods ---- */

function index (_req, res) {
  const { version, name } = packageJson
  return nodeResponse.success(res, `Bem vindo à ${name} (${version})`)
}

export default { index } 