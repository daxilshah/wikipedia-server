// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

let queryStrings = [];

app.use(express.json());
app.use(cors());

app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        gsrlimit: 100,
        srsearch: query,
      },
    });
    res.json({ results: response.data.query });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/history', (req, res) => {
    const { queryString } = req.body.params;
    queryStrings = [queryString, ...queryStrings];
    res.json({ message: 'Query string stored successfully' });
});

app.get('/api/history', (req, res) => {
    res.json(queryStrings);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});