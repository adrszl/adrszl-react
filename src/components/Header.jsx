const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav-container">
                <a href="#" className="logo">
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
                    <li><a href="#home" className="nav-link active">Home</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>

                <div className="menu-toggle" id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;