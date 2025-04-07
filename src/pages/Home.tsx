import './Home.css'

import AboutSection from '../components/AboutSection'
import IntroSection from '../components/IntroSection'
import DatesSection from '../components/DatesSection'
import SliderSection from '../components/SliderSection'
import LinkSection from '../components/LinkSection'
import AudioSection from '../components/AudioSection'

import { useEffect, useState } from 'react'
import BannerComponent from '../components/BannerComponent'

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
 
      <div>
        {isMobile ? (
          <>
            <AboutSection />

            <DatesSection />
            <SliderSection />
            <LinkSection />
          </>
        ) : (
          <>
          
     <IntroSection />
            <AboutSection />
            <DatesSection />
            <SliderSection />
            <BannerComponent />
            <AudioSection/>
            <LinkSection />

          </>
        )}
      </div>

  )
}

export default Home
