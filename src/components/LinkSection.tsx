import './LinkSection.css'

import { Zoom } from 'react-awesome-reveal'

const LinkSection: React.FC = () => {



  return (

    <div className="main">
      <div className="link-section">
        <Zoom>
          <h1>Links</h1>
        </Zoom>
        <ul className="links">
          <li>
            <a className="link" href="https://www.facebook.com/matilda.dona.dub/" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a className="link" href="https://www.instagram.com/matildadona_/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      </div>

  )
}

export default LinkSection
