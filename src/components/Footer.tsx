import './Footer.css'
import Lottie from 'lottie-react'
import Up from '../assets/up.json'

const style = {
  height: '50px',
  width: '50px'
}

const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
<footer>
  <div className="footer-content">
    <button className="btn-up" onClick={handleBackToTop}>
      <span>retour en haut</span>
      <Lottie animationData={Up} style={style} />
    </button>
  </div>
</footer>

  )
}

export default Footer
