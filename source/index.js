import { is, type } from '@yurkimus/types'

import { ResponseStatusEnum } from './enumeration.js'

export function ResponseStatus(value) {
  if (!(this instanceof ResponseStatus))
    return new ResponseStatus(value)

  if (is('Undefined', value))
    throw new TypeError(`Parameter 'value' must be provided.`)

  if (!ResponseStatus.has(value))
    throw new TypeError(
      `Parameter 'value' must be listed in 'ResponseStatuses' enumeration.`,
    )

  switch (type(value)) {
    case 'String':
      this.status = ResponseStatus.get(value)
      this.statusText = ResponseStatus.get(this.status)
      return this

    case 'Number':
      this.statusText = ResponseStatus.get(value)
      this.status = ResponseStatus.get(this.statusText)
      return this
  }
}

ResponseStatus.has = ResponseStatusEnum
  .has
  .bind(ResponseStatusEnum)

ResponseStatus.get = value => {
  if (!ResponseStatusEnum.has(value))
    throw new TypeError(
      `Parameter 'value' must be listed in 'ResponseStatuses' enumeration.`,
    )

  return ResponseStatusEnum.get(value)
}

ResponseStatus.prototype[Symbol.toStringTag] = 'ResponseStatus'
