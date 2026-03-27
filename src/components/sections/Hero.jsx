import { useRef, useEffect } from "react";

const HeroSection = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;

            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrolled * 0.7}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="hero" id="home" style={{ flexDirection: 'column' }} ref={heroRef}>
            <h1 style={{ fontSize: '56px' }}>Adrian Szlegel</h1>
            <h2>Senior Full Stack Developer</h2>
        </section>
    );
}

export default HeroSection;