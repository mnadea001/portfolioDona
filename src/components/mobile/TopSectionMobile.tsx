import { useParallax } from 'react-scroll-parallax';
import logo from '../../assets/images/MN.png'

const TopSectionMobile: React.FC = () => {



    const parallaxEasingTop = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: [-200, -200] ,
        translateY: [70, 10] ,
        // translateX: isMobile ? [-200, -200] : [0, 0],
        // translateY: isMobile ? [10, 70] : [30, 100],
    });

    return (
        <section className="bg-container">
               <div className="absolute-text">
                <img ref={parallaxEasingTop.ref as React.RefObject<HTMLImageElement>} id="homeImg" src={logo} />
                </div>
        </section>
    );
};

export default TopSectionMobile;
