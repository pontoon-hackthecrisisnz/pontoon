export const ADD_LIKED_JOB = 'ADD_LIKED_JOB';

export const addLikedJob = (job) => {
    return {
      type: ADD_LIKED_JOB,
      likedJob: job
    }
  }