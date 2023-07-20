export function Esc() {
  return (
    <>
      <div className="position-left">
        <h1>Escape Room</h1>
        <div className="Esc">
          <img src="../Public/images/Esc1.png" alt="Esc1"></img>
          <img src="../Public/images/Esc2.png" alt="Esc2"></img>
        </div>
        <div className="Esc">
          <img src="../Public/images/Esc3.png" alt="Esc3"></img>
          <img src="../Public/images/Esc4.png" alt="Esc4"></img>
        </div>
        <p>
          Our Escape Room project is a game where you start in an undisclosed
          area, you are met with 5 different games. You must complete each task
          in order to escape. Currently the sudoku game has only one passcode to
          progress to the next level, I would next like to connect this to a
          dictionary API so that the passcode will change every time you play.
        </p>
      </div>
    </>
  )
}

export default Esc
