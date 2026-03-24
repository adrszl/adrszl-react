import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarContent">
                    <ul className="navbar-nav">
                    <li data-toggle="collapse" data-target=".navbar-collapse" className="nav-item">
                        <a className="nav-link active" href="#welcome-section">Home</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                        <a className="nav-link" href="#project-section">Projects</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                        <a className="nav-link" href="#about-section">About</a>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                        <a className="nav-link" href="#contact-section">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;