var fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
  console.log('Fetching from Github');
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];
  // Fetching All pages
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    onPage++;
    console.log('got', allJobs.length, 'jobs total');
  }
  // Filtering for Jr.Dev Jobs
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    // Logic Setup
    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }
    return true;
  });
  console.log('Filtered down to', jrJobs.length);

  // Redis Setting Jobs
  const success = await setAsync('github', JSON.stringify(jrJobs));
  // 'github' is key used to fetch from the redis DB
  console.log({ success });
}

module.exports = fetchGithub;
