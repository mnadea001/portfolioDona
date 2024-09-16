import { AccordionDetails, Typography, Chip } from '@mui/material'
import { DarkModeContext } from '../providers/DarkModeProvider'
import { useContext } from 'react'
import './AccordionContent.css'

interface AccordionContentProps {
  date: string
  link: string
  lieu: string
  artistes: string[]
}

const AccordionContent: React.FC<AccordionContentProps> = ({ date, lieu, link, artistes }) => {
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
            <Typography style={textStyle}>
              <strong>Artistes présents:</strong>
            </Typography>
            <div>
              {artistes.map((language, index) => (
                <Chip key={index} label={language} style={textStyle} />
              ))}
            </div>
            <br></br>
            <a className="project-link" href={link} target="_blank">
              Lien vers l'évènement
            </a>
          </div>
        </div>
      </AccordionDetails>
    </div>
  )
}

export default AccordionContent
