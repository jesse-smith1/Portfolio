export function Esc() {
  return (
    <>
      <div className="position-left">
        <h1>Escape Room</h1>
        <div className="Esc">
          <img src="../public/images/Esc1.png" alt="Esc1" />
          <img src="../images/Esc2.png" alt="Esc2" />
        </div>
        <div className="Esc">
          <img src="./images/Esc3.png" alt="Esc3" />
          <img src="images/Esc4.png" alt="Esc4" />
        </div>
        <p>
          Our Escape Room project is a game where you start in an undisclosed
          area, you are met with 5 different games. You must complete each task
          in order to escape. Currently the sudoku game has only one passcode to
          progress to the next level, I would next like to connect this to a
          dictionary API so that the passcode will change every time you play.
        </p>
        <br></br>
        <p>
          In this app we have used:
          <ul>
            <li>Parrallax</li>
            <li>React Redux</li>
            <li>Routers</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQLite3</li>
            <li>Database</li>
            <li>Knex Migrations / Seeds</li>
          </ul>
          <br></br>
          <a href="https://github.com/jesse-smith1/Esc">View Source Code</a>
        </p>
      </div>
    </>
  )
}

export default Esc
