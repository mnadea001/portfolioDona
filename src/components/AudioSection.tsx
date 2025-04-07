import './LinkSection.css'

import { Zoom } from 'react-awesome-reveal'

const AudioSection: React.FC = () => {



  return (

    <div className="main">
      <div className="link-section">
        <Zoom>
          <h1>Audio</h1>
        </Zoom>
        <ul className="links">
          <li>
            <a className="link" href="https://soundcloud.com/pinataradio/seka-seka-invite-matilda-dona-190225" target="_blank">
              Lien 1 
            </a>
          </li>
          <li>
            <a className="link" href="https://soundcloud.com/6overflow/matilda-dona" target="_blank">
              Lien 2
            </a>
          </li>
        </ul>
      </div>
      </div>

  )
}

export default AudioSection
