var fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.get).bind(client);
const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    onPage++;
  }
  console.log('got', allJobs.length, 'jobs total');
}
fetchGithub();
module.exports = fetchGithub;
