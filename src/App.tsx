import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import SliderSection from './components/SliderSection'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import TopSection from './components/TopSection'
// import Footer from './components/Footer'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<TopSection />} />
          <Route path="/slider" element={<SliderSection />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/projets" element={<ProjectsSection />} />
          <Route path="/experiences" element={<ExperiencesSection />} />
          {/* <Footer /> */}
        </Route>
      </Routes>

    </>
  )
}

export default App
