function Nav() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <a href="https://www.linkedin.com/in/jesse-ta-smith/">
            <img
              src="/images/Linkedin.png"
              className="LinkedIn"
              alt="LinkedIn"
            ></img>
          </a>
          <a href="https://github.com/jesse-smith1">
            <img src="/images/Github.png" className="Github" alt="GitHub"></img>
          </a>
          <nav>
            <ul>
              <li>
                <a href="https://esc.pushed.nz/">Escape Room</a>
              </li>
            </ul>
          </nav>
          <img src="/images/menu.png" className="menuIcon" alt="MenuIcon"></img>
        </div>
      </div>
    </>
  )
}

export default Nav
