import React, { useEffect, useRef } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AccordionItem.css'

gsap.registerPlugin(ScrollTrigger)

interface AccordionItemProps {
  title: string
  date: string
  imageSrc: string
  lieu: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, date, imageSrc, lieu }) => {
  const bgStyle: React.CSSProperties = {
    backgroundColor: '#2b2b2b'
  }

  // Use useRef to reference the card element
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial setup for skew animation with GSAP
    const proxy = { skew: 0 }
    const skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg')
    const clamp = gsap.utils.clamp(-20, 20)

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300)
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          })
        }
      }
    })

    // Apply force3D and transformOrigin for better performance
    if (cardRef.current) {
      gsap.set(cardRef.current, { transformOrigin: 'right center', force3D: true })
    }
  }, [])

  return (
    <Card className="accordion-card skewElem" ref={cardRef}>
      <div className="image-container">
        <CardMedia component="img" image={imageSrc} alt={title} className="card-image" style={bgStyle} />

        <div className="overlay">
          <CardContent className="content-text">
            <Typography className="content-text header-card">{title}</Typography>
            <Typography className="content-text">{lieu}</Typography>
            <Typography className="content-text">{date}</Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default AccordionItem
