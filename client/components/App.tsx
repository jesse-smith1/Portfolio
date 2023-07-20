
import GitHub from './GitHub'
import Linkedin from './Linkedin'
import { Work } from './Work'
import { AboutMe } from './About'
import Cv from './Cv'


function App() {
  return (
    <>
      <header className="header">

        <GitHub />
        <Linkedin />
        <h1>Jesse Smith | Portfolio</h1>

      </header>
      <AboutMe />
      <Cv />
      <Work />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
