import './App.css'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import TopSection from './components/TopSection'
import { ParallaxProvider } from 'react-scroll-parallax'
import DiplomaComponent from './components/DiplomaComponent'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {


  return (
    <>
      <ParallaxProvider>
        <Header />
        <TopSection />
        <ProjectsSection />
        <ExperiencesSection />
        <DiplomaComponent />
        <Footer />
      </ParallaxProvider>
    </>
  )
}

export default App
