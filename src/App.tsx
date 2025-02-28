
import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import SideBar from './components/SideBar/SideBar'

function App() {
  return(
    <>
    <div className='App'>
    <div className='largeScreen'>
      <NavBar/>
      </div>
      <div className='smallScreen'>
        <SideBar/>
      </div>
      
      
      
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex={0}>
        <section id='home'>
          <Home/>
        </section>
        <section id='about'>
          <About/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
    </div>
    </div>
    </>
  )
}

export default App
