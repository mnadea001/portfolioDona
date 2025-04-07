import './App.css'
import { useState, useEffect } from "react";
import ProjectsSection from './components/ProjectsSection'
import Loading from './components/Loading'
import Home from './pages/Home'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage';


function App() {

  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);




  return (
  
        <ParallaxProvider>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={loading ? <Loading /> : <Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dates" element={<ProjectsSection />} />
              <Route path="/about" element={<AboutPage />} />
            </Route >
          </Routes>
          <Footer />
        </ParallaxProvider>

  )
}

export default App
