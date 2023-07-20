import { SET_LINKS } from '../actions/links'
import { Links, Action } from '../models/links'
const initialState = [] as Links[]

export default function linksReducers(state = initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case SET_LINKS:
      return payload

    default:
      return state
  }
}
