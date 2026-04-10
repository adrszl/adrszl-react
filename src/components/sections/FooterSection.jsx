import { scrollToSection } from "../../lib/helpers";

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="logo-icon">
                            <div className="logo-prism">
                                <div className="prism-shape"></div>
                            </div>
                        </div>
                        <span className="logo-text">
                            <span className="prism">Szlegel</span>
                            <span className="flux">Adrian</span>
                        </span>
                    </div>
                    <p className="footer-description">
                        Full Stack Developer, mainly focused on Front End. Main technology stack is JS, TS, React, Redux,
                        Node.js, Next.js, Wordpress, PHP, HTML, CSS, SASS and many more. Check my skills section and don't
                        forget to visit my LinkedIn profile.
                    </p>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/adrian-szlegel/" target="_blank" className="social-icon">in</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Sections</h4>
                    <div className="footer-links">
                        <a href="#" onClick={() => scrollToSection('home')}>Home</a>
                        <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    © 2018 - {new Date().getFullYear()} Szlegel Adrian. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;