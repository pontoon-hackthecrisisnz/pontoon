const connection = require('./connection');

const getJobs = (db = connection) => {
  return db('job_table').select();
};

module.exports = {
  getJobs,
};
