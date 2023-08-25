import Work from './Work'
import { AboutMe } from './About'
import Nav from './Nav'
import Header from './Header'
import WorkInProgress from './WorkInProgress'

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Header />
        <AboutMe />
        <Work />
        <WorkInProgress />
      </div>
    </>
  )
}

export default App
