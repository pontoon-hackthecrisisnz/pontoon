import request from 'superagent';

export const ADD_USER = 'ADD_USER';

export const addUser = (user) => {
    console.log(user)
    return {
        type: ADD_USER,
        user: user
    }
}
