/**
Timeing
    Seconds: 0-59
    Minutes: 0-59
    Hours: 0-23
    Day of Month: 1-31
    Months: 0-11 (Jan-Dec)
    Day of Week: 0-6 (Sun-Sat)
*/
var CronJob = require("cron").CronJob;
var job = new CronJob(
  "02 20 * * * *",
  function () {
    console.debug(`Job will run Every Hour on Second 02`);
    setTimeout(() => {
      console.debug(
        `Started: ${moment(job.lastDate()).format("DD.MM.YYYY hh:mm:ss")}`
      );
    }, 500);
  },
  function () {
    console.debug("Job Stopped !");
  },
  true,
  "Europe/London",
  null,
  true
);
job.addCallback(function () {
  console.debug(
    `${moment(job.lastDate()).format(
      "DD.MM.YYYY hh:mm:ss"
    )} finshed: next ${moment(job.nextDates()).fromNow()}`
  );
});
job.start();
//job.stop();
