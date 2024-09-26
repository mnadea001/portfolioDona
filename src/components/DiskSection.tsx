import { useParallax } from "react-scroll-parallax";

const DiskSection: React.FC = () => {

  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    rotate: [-150, 50]
  });

  return (
    <>
<div className="bg-container">
    {/* Image de la platine */}
    <div className='turntable-dark' />
    
    {/* Vinyle qui tourne */}
    <div ref={parallax.ref} className='spinner-style-dark' />
  </div>

    </>
  );
};

export default DiskSection
;
