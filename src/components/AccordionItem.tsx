import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import './AccordionItem.css'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { DarkModeContext } from '../providers/DarkModeProvider'

interface AccordionItemProps {
  title: string
  date: string
  imageSrc: string
  lieu: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, date, imageSrc, lieu }) => {

  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false
  const bgStyle: React.CSSProperties = {
    backgroundColor: darkMode === true ? '#2b2b2b' : '#D5C5B6'
  }

  return (
    <Card className="accordion-card">
      <div className="image-container">
        <CardMedia component="img" image={imageSrc} alt={title} className="card-image" style={bgStyle}/>
        <div className="overlay">
          <CardHeader title={title} className="header-text" />
          <CardContent className="content-text">
            <Typography>{lieu}</Typography>
            <Typography>{date}</Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default AccordionItem
