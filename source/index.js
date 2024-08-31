import { HttpStatuses } from '@yurkimus/http-statuses'

/**
 * @param {keyof HttpStatuses} key
 */
export function ResponseStatus(key) {
  if (!(key in HttpStatuses)) {
    throw new TypeError(
      `Expected key "${key}" to be presented in "HttpStatuses" listing`,
    )
  }

  this.status = HttpStatuses[key][0]
  this.statusText = HttpStatuses[key][1]
}

/**
 * @param {keyof HttpStatuses} key
 */
ResponseStatus.of = function (key) {
  return new ResponseStatus(key)
}
