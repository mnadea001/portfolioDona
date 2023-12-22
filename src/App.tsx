import './App.css'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import TopSection from './pages/TopSection'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import SliderSection from './components/SliderSection'
import NotFound from './pages/NotFound'

import DarkModeProvider from './providers/DarkModeProvider';

function App() {


  return (
    <>
      <DarkModeProvider>
        <ParallaxProvider>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<TopSection />} />
              <Route path="/slider" element={<SliderSection />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/experiences" element={<ExperiencesSection />} />
            </Route >
          </Routes>
        </ParallaxProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
