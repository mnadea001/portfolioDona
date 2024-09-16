import { useState, useContext } from 'react'
import { Accordion, AccordionDetails } from '@mui/material'
import AccordionHeader from './AccordionHeader'
import AccordionContent from './AccordionContent'
import ImageCarousel from './ImageCarousel'
import { DarkModeContext } from '../providers/DarkModeProvider'
import { useTheme } from '@mui/material/styles'
import './AccordionItem.css'

interface AccordionItemProps {
  title: string
  date: string
  link: string
  imageSrc: string
  images: { imgPath: string }[] 
  lieu: string
  artistes: string[] 
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, link, date, imageSrc, images, lieu, artistes }) => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false

  const theme = useTheme()

  const [expanded, setExpanded] = useState(false)

  const handleAccordionChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion
      className={`accordion-content ${expanded ? 'accordion-expanded' : ''} ${darkMode ? 'dark-mode' : ''}`}
      expanded={expanded}
      onChange={handleAccordionChange}>
      <AccordionHeader title={title} imageSrc={imageSrc} darkMode={darkMode} />
      <AccordionDetails>
        <div className="flex-container">
          <AccordionContent date={date} lieu={lieu} link={link} artistes={artistes} />
          <ImageCarousel images={images} theme={theme} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionItem
