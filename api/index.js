const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
const port = 3001;

const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  console.log(JSON.stringify(jobs));
  return res.send(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
