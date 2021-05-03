var CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetch-github');
var job = new CronJob(
  '* * * * *',
  function () {
    console.log('You will see this message every second');
  },
  null,
  true,
  'America/Los_Angeles'
);
job.start();
