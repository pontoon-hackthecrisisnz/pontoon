import {combineReducers} from 'redux'
// import user from './user'
import jobs from './jobs'
import user from './user'
import savedList from './savedList'

export default combineReducers({
  jobs,
  user,
  savedList
})