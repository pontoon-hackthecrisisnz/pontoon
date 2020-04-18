import { GET_JOB, RECEIVED_JOB, ERROR } from '../actions/jobs';

const initialState = []

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return state
    case RECEIVED_JOB:
      return action.payload;
    case ERROR:
      return action.payload
    default:
      return state;
  }
};

export default jobs;
