# ResponseStatus Prototype

JavaScript's ResponseStatus implementation

This package utilises [HttpStatuses](https://github.com/yurkimus/http-statuses)

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [ResponseStatus](#responsestatus)
- [License](#license)

## Installation

### npm

```
npm install @yurkimus/response-status
```

### urls

```
"@yurkimus/response-status": "npm:@yurkimus/response-status"
```

```
"@yurkimus/response-status": "github:yurkimus/response-status"
```

```
"@yurkimus/response-status": "https://raw.githubusercontent.com/yurkimus/response-status/main/source/index.js"
```

## Exports

### ResponseStatus

#### Definition:

```
ResponseStatus :: ResponseStatusInit -> ResponseStatus

ResponseStatus.of :: ResponseStatusInit -> ResponseStatus

ResponseStatus.get :: ResponseStatusInit ->
  | (statusText: String, status: Number)
  | Undefined

ResponseStatus.has :: ResponseStatusInit -> Boolean
```

#### Example:

```javascript
new ResponseStatus('No Content') // => ResponseStatus { status: 204, statusText: 'No Content' }

ResponseStatus.of('OK') // => ResponseStatus { status: 200, statusText: 'OK' }

ResponseStatus.get('Accepted') // => ['Accepted', 202]

ResponseStatus.get(202) // => ['Accepted', 202]

ResponseStatus.has('Accepted') // => true

ResponseStatus.has(202) // => true
```

## License

[MIT](LICENSE)
