import { ADD_LIKED_JOB } from '../actions/savedList';

const initialState = []


const savedList = (state = initialState, action) => {
    switch (action.type) {
      case ADD_LIKED_JOB:
        state.push(action.likedJob)
        return state


      default:
        return state;
    }
  };



export default savedList