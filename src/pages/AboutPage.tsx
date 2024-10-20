import AboutSection from '../components/AboutSection'

import { useNavigate } from 'react-router'

const AboutPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
 
        <button className="retour-btn" onClick={() => navigate(-1)}>
          <span>retour</span>
        </button>
        <AboutSection />
  
    </>
  )
}

export default AboutPage
