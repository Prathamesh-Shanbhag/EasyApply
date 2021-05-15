var CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetch-github');
const api = require('../api/index');
var job = new CronJob('* * * * *', api, null, true, 'America/Los_Angeles');
var job = new CronJob(
  '* * * * *',
  fetchGithub,
  null,
  true,
  'America/Los_Angeles'
);
job.start();
