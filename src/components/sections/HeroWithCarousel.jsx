import { useState, useEffect, useRef, useCallback } from 'react';
import { scrollToSection, openProjectLink } from '../../lib/helpers';

const HeroWithCarouselSection = ({ portfolioData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioData.length);
    }, [portfolioData.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            (prev - 1 + portfolioData.length) % portfolioData.length
        );
    }, [portfolioData.length]);

    // Resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [nextSlide, prevSlide]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // SWIPE
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const THRESHOLD = 50;

        if (Math.abs(diff) < THRESHOLD) return;

        if (diff > 0) nextSlide();
        else prevSlide();
    };

    // STYLE (updateCarousel)
    const getItemStyle = (index) => {
        const totalItems = portfolioData.length;
        let offset = index - currentIndex;

        if (offset > totalItems / 2) offset -= totalItems;
        if (offset < -totalItems / 2) offset += totalItems;

        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;

        if (isMobile) {
            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }

        let style = {
            transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
        };

        if (absOffset === 0) {
            style = {
                ...style,
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1,
                zIndex: 10,
            };
        } else if (absOffset === 1) {
            style = {
                ...style,
                transform: `translate(-50%, -50%) translateX(${sign * spacing1}px) rotateY(${-sign * 30}deg) scale(0.85)`,
                opacity: 0.8,
                zIndex: 5,
            };
        } else if (absOffset === 2) {
            style = {
                ...style,
                transform: `translate(-50%, -50%) translateX(${sign * spacing2}px) rotateY(${-sign * 40}deg) scale(0.7)`,
                opacity: 0.5,
                zIndex: 3,
            };
        } else if (absOffset === 3) {
            style = {
                ...style,
                transform: `translate(-50%, -50%) translateX(${sign * spacing3}px) rotateY(${-sign * 45}deg) scale(0.6)`,
                opacity: 0.3,
                zIndex: 2,
            };
        } else {
            style = {
                ...style,
                transform: 'translate(-50%, -50%) scale(0.5)',
                opacity: 0,
                zIndex: 1,
            };
        }

        return style;
    };

    return (
        <>
            {/* CAROUSEL */}
            <div
                className="carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {portfolioData.map((data, index) => (
                    <div
                        key={data.id}
                        className="carousel-item"
                        style={getItemStyle(index)}
                    >
                        <div className="card">
                            <div className="card-number">0{data.id}</div>

                            <div className="card-image">
                                <img src={data.image} alt={data.title} />
                            </div>

                            <h3 className="card-title">{data.title}</h3>
                            <p className="card-description">{data.description}</p>

                            <div className="card-tech">
                                {data.tech.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                className="card-cta"
                                onClick={() =>
                                    data.projectLink === '404'
                                        ? scrollToSection('about')
                                        : openProjectLink(data.projectLink)
                                }
                            >
                                {data.projectLink === '404' ? 'Explore' : 'Check'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* INDICATORS */}
            <div className="indicators">
                {portfolioData.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* BUTTONS */}
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
        </>
    );
}

export default HeroWithCarouselSection;