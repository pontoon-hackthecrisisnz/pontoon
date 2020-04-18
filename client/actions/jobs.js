import request from 'superagent';

export const GET_JOB = 'GET_JOB';
export const RECEIVED_JOB = 'RECEIVED_JOB';
export const ERROR = 'ERROR';

const URL = '/jobs';
const likedJobs = []
const dislikedJobs = []

export const getJob = () => {
  return {
    type: GET_JOB,
  };
};

export const recievedJob = (job) => {
  return {
    type: RECEIVED_JOB,
    payload: job,
  };
};

export const recievedErr = (err) => {
  return {
    type: ERROR,
    payload: err,
  };
};

//api export call to return the user for the front end.

export function returnJob(town, source) {
  return (dispatch) => {
    dispatch(getJob());
    return request
      .get(URL + '/?town=' + town + '&source=' + source)
      .then((res) => {
        return res.body;
      })
      .then((jobArr) => {
        return dispatch(recievedJob(jobArr));
      })
      .catch((err) => {
        return dispatch(recievedErr(err));
      });
  };
}
