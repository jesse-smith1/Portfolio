import connection from './connection'

const db = connection

export function getLinks() {
  return db('links').select('id', 'image', 'link')
}
