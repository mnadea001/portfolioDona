import './AboutSection.css'

import { Zoom } from 'react-awesome-reveal'
import links from '../assets/images/links.png'

const LinkSection: React.FC = () => {



  return (

    <div className="main">
      <div className="about-section">
        <Zoom>
        <img alt='links' src={links} style={{ maxWidth: '80%', height: 'auto', maxHeight: '500px', marginTop: '50px',marginBottom: '50px', marginLeft: 'auto' }} />
        </Zoom>
        <ul className="footer-links">
          <li>
            <a className="footer-link" href="https://www.facebook.com/matilda.dona.dub/" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a className="footer-link" href="https://www.instagram.com/matildadona_/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      </div>

  )
}

export default LinkSection
