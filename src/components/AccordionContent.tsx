import { AccordionDetails, Typography } from '@mui/material'
import { DarkModeContext } from '../providers/DarkModeProvider'
import { useContext } from 'react'
import './AccordionContent.css'

interface AccordionContentProps {
  date: string
  lieu: string
  imageSrc: string
}

const AccordionContent: React.FC<AccordionContentProps> = ({ date, lieu, imageSrc }) => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const textStyle: React.CSSProperties = {
    color: darkMode === true ? '#D5FF3C' : '#333333',
    margin: '0.5em'
  }

  return (
    <div className="flex-item">
      <AccordionDetails>
        <div className="content-container flex-container">
          <div className="flex-item">
            <Typography style={textStyle}>
              <strong>{date}</strong>
            </Typography>
            <br></br>
            <Typography style={textStyle}>Lieu: {lieu}</Typography>
            <br></br>
            <img
              src={imageSrc}
              alt={`Image pour event`}
              className="hovered-image"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '550px', marginTop: '10px', marginLeft: 'auto' }}
            />


            <br></br>

          </div>
        </div>
      </AccordionDetails>
    </div>
  )
}

export default AccordionContent
