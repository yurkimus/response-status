import { HttpStatuses } from '@yurkimus/http-statuses'

/**
 * @typedef {keyof typeof HttpStatuses | typeof HttpStatuses[keyof typeof HttpStatuses]} ResponseStatusInit
 */

/**
 * @param {ResponseStatusInit} init
 */
export function ResponseStatus(init) {
  if (!ResponseStatus.has(init))
    throw new ReferenceError(
      `Expected key "${init}" to be presented in "HttpStatuses"`,
    )

  let [statusText, status] = ResponseStatus.get(init)

  this.statusText = statusText
  this.status = status
}

/**
 * @param {ResponseStatusInit} init
 */
ResponseStatus.of = init => new ResponseStatus(init)

/**
 * @param {ResponseStatusInit} init
 */
ResponseStatus.get = init => {
  let found = Object
    .entries(HttpStatuses)
    .find(([statusText, status]) =>
      statusText === init
      || status === init
    )

  if (!found)
    return undefined

  return found
}

/**
 * @param {ResponseStatusInit} init
 */
ResponseStatus.has = init => Boolean(ResponseStatus.get(init))

ResponseStatus.prototype[Symbol.toStringTag] = 'ResponseStatus'
