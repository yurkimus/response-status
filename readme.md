# ResponseStatus Prototype

JavaScript's Enumeration implementation

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
ResponseStatus :: key -> ResponseStatus
```

#### Example:

```javascript
new ResponseStatus('No Content') // => ResponseStatus { status: 204, statusText: 'No Content' }

ResponseStatus.of('OK') // => ResponseStatus { status: 200, statusText: 'OK' }
```

## License

[MIT](LICENSE)
