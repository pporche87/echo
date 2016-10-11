/* eslint-disable no-nested-ternary, no-multi-spaces, comma-spacing */
/* eslint key-spacing: [2, { "mode": "minimum" }] */

const [ERROR, LOG, DEBUG, TRACE] = [1, 2, 3, 4]
const LOG_LEVEL = process.env.NODE_ENV === 'development' ? DEBUG :
                  process.env.NODE_ENV === 'test'        ? ERROR :
                  LOG
const workerId = process.env.LG_WORKER_ID ? `(worker.${process.env.LG_WORKER_ID}) ` : ''

export default {
  error: (...args) => should(ERROR) && console.log(`${workerId}ERROR>`, ...args),
  log:   (...args) => should(LOG)   && console.log(`${workerId}LOG>`  , ...args),
  debug: (...args) => should(DEBUG) && console.log(`${workerId}DEBUG>`, ...args),
  trace: (...args) => should(TRACE) && console.log(`${workerId}TRACE>`, ...args),
}

function should(lvl) {
  return LOG_LEVEL >= lvl
}
