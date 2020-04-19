export const ADD_LIKED_JOB = 'ADD_LIKED_JOB';

//function to add job to a 'liked jobs' list

export const addLikedJob = (job) => {
    return {
      type: ADD_LIKED_JOB,
      likedJob: job
    }
  }