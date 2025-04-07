import { motion } from 'framer-motion'
import DiskSection from './DiskSection'
const LoaderVariant = {
  initial: { left: '-100vw' },
  animate: {
    left: '0',
    transition: { duration: 2.3, type: 'tween', ease: 'linear' }
  }
}
const Loading: React.FC = () => {
  return (
      <div className="loader-container">
        <div className="loader-wrap">
      
          <DiskSection />
          <p className="loader-text">chargement en cours</p>
          <motion.div className="loader-bar3" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
        </div>
      </div>
  )
}

export default Loading
