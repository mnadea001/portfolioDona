import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import './AccordionItem.css'
import Typography from '@mui/material/Typography'

interface AccordionItemProps {
  title: string
  date: string
  imageSrc: string
  lieu: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, date, imageSrc, lieu }) => {
  return (
    <Card className="accordion-card">
      <div className="image-container">
        <CardMedia component="img" image={imageSrc} alt={title} className="card-image" />
        <div className="overlay">
          <CardHeader title={title} subheader={date} className="header-text" />
          <CardContent className="content-text">
            <Typography>{lieu}</Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default AccordionItem
