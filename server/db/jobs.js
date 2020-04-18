const connection = require('./connection');

const getJobs = (town, db = connection) => {
  //console.log('this is the param I got: ' + region)
  return db('main')
  .select('*')
  .where(
    {
      //source_job: lastJob,
      ad_town: town
    });
};

module.exports = {
  getJobs,
};

//replace the strings in where with variables after we change what has been passed