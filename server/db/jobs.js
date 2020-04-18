const connection = require('./connection');

const getJobs = (town, source, db = connection) => {
  console.log('this is the param I got: ' + town + ' and ' + source)
  return db('main')
  .select('*')
  .where(
    {
      source_job: source,
      ad_region: town
    });
};

const getJobsNoSource = (town, db = connection) => {
  console.log('this is the param I got: ' + town)
  return db('main')
  .select('*')
  .where(
    {
      ad_region: town
    });
};

module.exports = {
  getJobs,
};

//replace the strings in where with variables after we change what has been passed