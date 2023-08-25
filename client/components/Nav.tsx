import Linkedin from './Linkedin'
import GitHub from './GitHub'
import Cv from './Cv'

function Nav() {
  return (
    <>
      <div>
        <div className="navbar">
          <Linkedin />
          <GitHub />
          <nav>
            <ul>
              <li>
                <a href="https://esc.pushed.nz/">Escape Room</a>
              </li>
              <li>
                <Cv />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
