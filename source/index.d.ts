type Statuses = import('./enumeration.d.ts').Statuses

type StatusTexts = import('./enumeration.d.ts').StatusTexts

interface ResponseStatus {
  status: Statuses
  statusText: StatusTexts

  toString(): string

  readonly [Symbol.toStringTag]: 'ResponseStatus'
}

interface ResponseStatusConstructor {
  new(value: Statuses | StatusTexts): ResponseStatus

  (value: Statuses | StatusTexts): ResponseStatus

  has(value: Statuses | StatusTexts): boolean

  get(value: Statuses | StatusTexts): string | number

  readonly prototype: ResponseStatus

  readonly [Symbol.toStringTag]: 'ResponseStatus'
}

export var ResponseStatus: ResponseStatusConstructor
