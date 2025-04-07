
import DiskSection from './DiskSection'

const Loading: React.FC = () => {
  return (
      <div className="loader-container">
        <div className="loader-wrap">
      
          <DiskSection />
          <p className="loader-text">chargement en cours</p>
        </div>
      </div>
  )
}

export default Loading
