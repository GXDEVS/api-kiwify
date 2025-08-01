/* ---- Imports ---- */

import NodeResponse from 'densyy-node-toolbox/core/tools/node-response.js'

const nodeResponse = new NodeResponse()

/* ---- Methods ---- */

function handle () {
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error)
    process.exit(1)
  })

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
    process.exit(1)
  })
}

export default { handle } 