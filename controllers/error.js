/* ---- Imports ---- */

import NodeResponse from 'densyy-node-toolbox/core/tools/node-response.js'

const nodeResponse = new NodeResponse()

/* ---- Methods ---- */

function notFound (_req, res) {
  return nodeResponse.notFound(res, 'Rota não encontrada')
}

export default { notFound } 