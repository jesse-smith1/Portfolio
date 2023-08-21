import Work from './Work'
import { AboutMe } from './About'
import Nav from './Nav'
import Header from './Header'

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Header />
        <AboutMe />
        <Work />
      </div>
    </>
  )
}

export default App
