import {combineReducers} from 'redux'
// import user from './user'
import jobs from './jobs'
import user from './user'

export default combineReducers({
  jobs,
  user
})