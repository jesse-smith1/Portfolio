import { combineReducers } from 'redux'
import linksReducers from '../reducers/links'
// import stuff from './stuff'

export default combineReducers({
  links: linksReducers,
})
