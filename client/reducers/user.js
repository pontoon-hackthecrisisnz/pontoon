import { ADD_USER, addUser } from '../actions/user';

const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_USER:
            return action.user;

        default:
            return state;
    }

}



export default user