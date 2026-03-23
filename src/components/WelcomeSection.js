import React from 'react';
import logo from '../logo.svg';
import './WelcomeSection.css';

function WelcomeSection() {
    return (
        <div id="welcome-section">
            <h1 id="name" className="text-center">Adrian Szlegel</h1>
            <p className="text-center">Full Stack Developer</p>
            <h2 className='text-center'>This version of my portfolio website is obsolete. Check out my new design in the link below. In the meantime I'll work to change this React version ASAP.</h2>
            <p className="text-center" ><a href="https://adrszl.github.io/">Static version</a></p>
            <div className="text-center">
            <img src={logo} className="App-logo" alt="react" />
            </div>
        </div>
    );
}

export default WelcomeSection;