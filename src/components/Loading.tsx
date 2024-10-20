// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import lion from '../assets/images/7mbn.gif'

const LoaderVariant = {
  initial: { left: '-100vw' },
  animate: {
    left: '0',
    transition: { duration: 2.3, type: 'tween', ease: 'linear' }
  }
}
const Loading: React.FC = () => {
  // const [count, setCount] = useState(0)
  // const [test, setTest] = useState(true)

  // useEffect(() => {
  //   let counter = setInterval(() => {
  //     setCount(count + 1)
  //     if (count === 100) {
  //       setCount(0)
  //       setTest(false)
  //     }
  //   }, 20)
  //   return () => clearInterval(counter)
  // })
  return (
    <>
      <div className="loader-container">
        <div className="loader-wrap">          
        {/* <motion.div
            className="counter"
            variants={LoaderVariant}
            initial={{ left: 0 }}
            transition={{ duration: 2.3, ease: 'linear' }}>
            <p className="loader-text ms-5">({test && count})%</p>
          </motion.div> */}

          {/* <img className="lion-img" src={lion} /> */}

          <motion.div className="loader-bar1" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
          <motion.div className="loader-bar2" variants={LoaderVariant} initial="initial" animate="animate"></motion.div>
          <motion.div
          className="loader-bar3"
          variants={LoaderVariant}
          initial="initial"
          animate="animate"
        ></motion.div> 
        </div>
      </div>
    </>
  )
}

export default Loading
