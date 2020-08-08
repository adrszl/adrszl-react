import React from 'react';
import ContactCanvas from '../components/ContactCanvas';
import './ContactSection.css';

function ContactSection() {
    return (
        <div id="contact-section">
            <h1 id="contactTitle" className="text-center">Contact</h1>
            <div id="water">
                <canvas id="canvas"></canvas>
                <ContactCanvas />
            </div>
            <div>
                <p id="photoSource" className="text-center">Photo source: www.programmerlife.club</p>
                <img id="authorsPhoto" src="img/profilowe1.jpg" alt="Adrian Szlegel" />
            </div>
        </div>
    );
}

export default ContactSection;