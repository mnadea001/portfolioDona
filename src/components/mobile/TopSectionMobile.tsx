import { useParallax } from 'react-scroll-parallax';
import logo from '../../assets/images/MN.png'
import { useEffect, useState } from 'react';

const TopSectionMobile: React.FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const parallaxEasingTop = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: isMobile ? [-200, -200] : [0, 0],
        translateY: isMobile ? [10, 70] : [30, 100],
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
