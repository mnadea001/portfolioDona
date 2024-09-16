import { useState, useContext } from 'react'
import { Accordion, AccordionDetails } from '@mui/material'
import AccordionHeader from './AccordionHeader'
import AccordionContent from './AccordionContent'
import { DarkModeContext } from '../providers/DarkModeProvider'
// import { useTheme } from '@mui/material/styles'
import './AccordionItem.css'

interface AccordionItemProps {
  title: string
  date: string
  imageSrc: string
  lieu: string

}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, date, imageSrc, lieu }) => {
  const darkModeContext = useContext(DarkModeContext)
  const darkMode = darkModeContext?.darkMode || false

  // const theme = useTheme()

  const [expanded, setExpanded] = useState(false)

  const handleAccordionChange = () => {
    setExpanded(!expanded)
  }

  return (
    <>
    <Accordion
      className={`accordion-content ${expanded ? 'accordion-expanded' : ''} ${darkMode ? 'dark-mode' : ''}`}
      expanded={expanded}
      onChange={handleAccordionChange}>
      <AccordionHeader title={title}  darkMode={darkMode} />
      <AccordionDetails>
        <div className="flex-container">
          <AccordionContent date={date} lieu={lieu} imageSrc={imageSrc} />
     
        </div>
      </AccordionDetails>
    </Accordion>
    </>
  )
}

export default AccordionItem
