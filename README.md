## Getting Started

First, install the dependencies:
```bash
npm install
# or
yarn add
```

Then, run the development server:

```bash
node app/server.js  
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Wikipedia Server

This package consists of APIs that are consumed by [Wikipedia UI](https://github.com/daxilshah/wikipedia-ui).
Package consists of 3 APIs.

1. (GET) /api/search: This API is used for fetching results from [Wikipedia API](https://en.wikipedia.org/w/api.php).
2. (POST) /api/history: This API is used for storing user history of search.
3. (GET) /api/history: This API is used for fetching user history of search.