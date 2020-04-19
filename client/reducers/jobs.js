import { GET_JOB, RECEIVED_JOB, ADD_LIKED_JOB, ERROR } from '../actions/jobs';

const initialState = []

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return state
    case RECEIVED_JOB:
      return action.payload;
    case ADD_LIKED_JOB:
      console.log(typeof action.likedJobs)
      return action.likedJobs
    case ERROR:
      return action.payload
    default:
      return state;
  }
};

export default jobs;
