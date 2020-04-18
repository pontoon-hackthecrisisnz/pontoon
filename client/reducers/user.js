import SAVE_USER_INFORMATION from '../actions/index'

const initialState = {
    test: "She works hard for the money"
}

const users = (state = initialState, action) => {
  switch (action.type) {

    case SAVE_USER_INFORMATION:
        return action.userinfo

    default:
      return state
  }
}

export default users