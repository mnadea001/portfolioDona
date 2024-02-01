import './App.css'
import { useState, useEffect } from "react";
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import Loading from './components/Loading'
import TopSection from './pages/TopSection'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import SliderSection from './components/SliderSection'
import NotFound from './pages/NotFound'
import DarkModeProvider from './providers/DarkModeProvider';
import DiplomaComponent from './components/DiplomaComponent';
import DiplomaMobileComponent from './components/DiplomaMobileComponent'; // import your mobile component


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
              <Route index element={loading ? <Loading /> : <TopSection />} />
              <Route path="/slider" element={<SliderSection />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/experiences" element={<ExperiencesSection />} />
              <Route path="/diplomes" element={<DiplomaComponent />} />
              <Route path="/diplomes" element={<DiplomaComponent />} />
              <Route path="/diplomes_mobile" element={<DiplomaMobileComponent />} />
            </Route >
          </Routes>
          <Footer />
        </ParallaxProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
