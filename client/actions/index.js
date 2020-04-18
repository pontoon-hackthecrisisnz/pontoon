import request from 'superagent'

// const ACTION = 'ACTION'

//function for action

//api?

export const SAVE_USER_INFORMATION = 'SAVE_USER_INFORMATION'

/*

userinfo = {
    name,
    region,
    town,
    lastJobs,
    minSalary
}

*/

export const saveUserInformation = (userinfo) => {
    return {
      type: ADD_TO_CART,
      userinfo: userinfo,
    }
}

  
