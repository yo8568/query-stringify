# Nine Limit

![build](https://travis-ci.org/yo8568/query-stringify.svg?branch=master)

A simple tool for combining some query parameters as a entire url string.

### Installation

```bash
$ npm install query-stringify
```

### Usage

***parameters***

```javascript
  qs({ basePath, query, url, ignore  })
```

*@param {string} options.basePath - url*

*@param {object} options.query - parameters, eg query = { limit: 20, accounts: ['123', '456'], breakdown: 'country' }*

*@param {string} options.url - next page url [high priority]*

*@param {array} options.ignore - ignore specfic fields*

```javascript
import qs from 'query-stringify'

qs({
    basePath: '/api/test',
    query: {
      user: [1234, 3456],
      business: '3333333',
      skip: 10,
      limit: 333
    },
    ignore: ['user']
  })

// output: '/api/test?business=3333333&skip=10&limit=333'
```

### Run Test

***Test***

```bash
  $ npm run test
```

***Converage***

```bash
  $ npm run cov
```

### Licence

MIT
