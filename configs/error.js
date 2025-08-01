/* ---- Imports ---- */

import NodeResponse from "densyy-node-toolbox/core/tools/node-response.js";
import NodeLogger from "densyy-node-toolbox/core/utils/node-logger.js";

const nodeResponse = new NodeResponse();
const nodeLogger = new NodeLogger();

/* ---- Methods ---- */

function capture(res, error) {
  nodeLogger.log(error);
  return nodeResponse.serverError(res);
}

export default { capture };
