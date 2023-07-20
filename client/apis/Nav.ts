import request from 'superagent'

const navUrl = '/api/v1/links'

export async function fetchLinks() {
  const res = await request.get(navUrl)
  const linksArray = res.body
  return linksArray
}
