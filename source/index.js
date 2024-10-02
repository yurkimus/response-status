import { HttpStatuses } from '@yurkimus/http-statuses'

/**
 * @param {keyof typeof HttpStatuses | typeof HttpStatuses[keyof typeof HttpStatuses]} value
 */
export function ResponseStatus(value) {
  let found = Object
    .entries(HttpStatuses)
    .find(([statusText, status]) => statusText === value || status === value)

  if (!found) {
    throw new TypeError(
      `Expected key "${status}" to be presented in "HttpStatuses" listing`,
    )
  }

  this.statusText = found[0]
  this.status = found[1]
}

/**
 * @param {keyof typeof HttpStatuses | typeof HttpStatuses[keyof typeof HttpStatuses]} value
 */
ResponseStatus.of = function(value) {
  return new ResponseStatus(value)
}
