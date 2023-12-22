import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import SliderSection from './components/SliderSection'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import TopSection from './components/TopSection'
import { ParallaxProvider } from 'react-scroll-parallax'
// import Footer from './components/Footer'

function App() {


  return (
    <>    
    <ParallaxProvider>
      <Routes>
        <Route path='/' element={<Header />}>
    
          <Route index element={<TopSection />} />
  
          <Route path="/slider" element={<SliderSection />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experiences" element={<ExperiencesSection />} />
          
          {/* <Footer /> */}
        </Route >
      </Routes>
      </ParallaxProvider>
    </>
  )
}

export default App
