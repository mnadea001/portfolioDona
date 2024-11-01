import { motion } from 'framer-motion'

const LoaderVariant = {
  initial: { left: '-100vw' },
  animate: {
    left: '0',
    transition: { duration: 2.3, type: 'tween', ease: 'linear' }
  }
}
const Loading: React.FC = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader-wrap">
          <p className="loader-text">Chargement en cours</p>
          <motion.div className="loader-bar1" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
          <motion.div className="loader-bar2" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
          <motion.div className="loader-bar3" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
        </div>
      </div>
    </>
  )
}

export default Loading
