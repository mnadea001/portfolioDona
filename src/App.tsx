import './App.css'
import { useState, useEffect } from "react";
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import Loading from './components/Loading'
import Home from './pages/Home'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import RootsSection from './components/RootsSection'
import NotFound from './pages/NotFound'
import DarkModeProvider from './providers/DarkModeProvider';
import DiplomaComponent from './components/DiplomaComponent';
import DiplomaMobileComponent from './components/mobile/DiplomaMobileComponent'; 
import ExperiencesMobile from './components/mobile/ExperiencesMobile';
import AboutSection from './components/AboutSection';


function App() {

  const [loading, setLoding] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);




  return (
    <>
      <DarkModeProvider>
        <ParallaxProvider>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={loading ? <Loading /> : <Home />} />
              <Route path="/slider" element={<RootsSection />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/experiences" element={<ExperiencesSection />} />
              <Route path="/experiences-mobile" element={<ExperiencesMobile />} />
              <Route path="/diplomes" element={<DiplomaComponent />} />
              <Route path="/diplomes-mobile" element={<DiplomaMobileComponent />} />

            </Route >
          </Routes>
          <Footer />
        </ParallaxProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
