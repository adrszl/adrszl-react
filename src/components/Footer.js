import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="text-center">
            &copy; 2018 - {new Date().getFullYear()} Adrian Szlegel
        </footer>
    );
}

export default Footer;