import { useParallax } from 'react-scroll-parallax';
import logo from '../assets/images/MN.png'
import { useEffect, useState } from 'react';

const TopSection: React.FC = () => {

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

    const parallaxEasing = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: isMobile ? [-300, -100] : [-300, 110],
        translateY: isMobile ? [0, 50] : [0, 100],
    });

    const parallaxEasingLeft = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: isMobile ? [-100, -300] : [300, -110],
        translateY: isMobile ? [0, 50] : [0, 100],
    });

    const parallaxEasingTop = useParallax<HTMLDivElement>({
        easing: "easeOutQuad",
        translateX: isMobile ? [-200, -200] : [0, 0],
        translateY: isMobile ? [10, 70] : [30, 100],
    });

    return (
        <section className="bg-container">
            <div className="absolute-text">
                <img ref={parallaxEasingTop.ref as React.RefObject<HTMLImageElement>} id="homeImg" src={logo} />
                <div className="colored-circle first-circle" ref={parallaxEasing.ref} data-text="CREATIVE DEVELOPER" />
                <div className="colored-circle second-circle" ref={parallaxEasingLeft.ref} data-text="DIGITAL CREATOR" />
            </div>
        </section>
    );
};

export default TopSection;
