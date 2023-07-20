import { getLinks } from '../../server/db/db'

export function Nav() {
  return (
    <>
      <p>nothing here yet but this is a Nav</p>
      <p>{getLinks.id}</p>
    </>
  )
}

export default Nav
