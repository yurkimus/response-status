import { HttpStatuses } from '@yurkimus/http-statuses'

/**
 * @param {keyof HttpStatuses} status
 */
export function ResponseStatus(status) {
  if (!(status in HttpStatuses)) {
    throw new TypeError(
      `Expected key "${status}" to be presented in "HttpStatuses" listing`,
    )
  }

  this.status = HttpStatuses[status][0]
  this.statusText = HttpStatuses[status][1]
}

/**
 * @param {keyof HttpStatuses} status
 */
ResponseStatus.of = function (status) {
  return new ResponseStatus(status)
}
