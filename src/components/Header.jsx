import { forwardRef } from "react";

const Header = forwardRef(({ activeSection, onNavigate }, ref) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header ref={ref} className="header" id="header">
            <nav className="nav-container">
                <a href="#home" className="logo">
                    <div className="logo-icon">
                        <div className="logo-prism">
                            <div className="prism-shape"></div>
                        </div>
                    </div>
                    <span className="logo-text">
                        <span className="prism">Szlegel</span>
                        <span className="flux">Adrian</span>
                    </span>
                </a>

                <ul className="nav-menu" id="navMenu">
                    <li onClick={() => onNavigate('home')}>
                        <a href="#home" className={`nav-link  ${activeSection === 'home' ? "active" : ""}`} onClick={scrollToTop}>Home</a>
                    </li>
                    <li onClick={() => onNavigate('projects')}>
                        <a href="#projects" className={`nav-link  ${activeSection === 'projects' ? "active" : ""}`}>Projects</a>
                    </li>
                    <li onClick={() => onNavigate('about')}>
                        <a href="#about" className={`nav-link  ${activeSection === 'about' ? "active" : ""}`}>About</a>
                    </li>
                    <li onClick={() => onNavigate('contact')}>
                        <a href="#contact" className={`nav-link  ${activeSection === 'contact' ? "active" : ""}`}>Contact</a>
                    </li>
                </ul>

                <div className="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
});

export default Header;