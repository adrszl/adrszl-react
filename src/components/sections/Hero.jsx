import { useRef, useEffect, forwardRef } from "react";

const HeroSection = forwardRef((props, ref) => {
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

    const mergeRefs = (...refs) => (el) => {
        refs.forEach(ref => {
            if (!ref) return;

            if (typeof ref === "function") {
                ref(el);
            } else {
                ref.current = el;
            }
        });
    };

    return (
        <section className="hero" id="home" style={{ flexDirection: 'column' }} ref={ref}>
            <div ref={heroRef}>
                <h1 style={{ fontSize: '56px' }}>Adrian Szlegel</h1>
                <h2>Senior Full Stack Developer</h2>
            </div>
        </section>
    );
});

export default HeroSection;