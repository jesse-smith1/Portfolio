import * as api from '../apis/Nav'
import { ThunkAction } from '../store'
import { Links } from '../models/links'

export const SET_LINKS = 'SET_LINKS'

export function setLinks(links: Links[]) {
  return {
    type: SET_LINKS,
    payload: links,
  }
}

export function getLinks(): ThunkAction {
  return async (dispatch) => {
    try {
      const linksArr = await api.fetchLinks()
      dispatch(setLinks(linksArr))
    } catch (err) {
      console.error('uh oh, action bad', err)
    }
  }
}
