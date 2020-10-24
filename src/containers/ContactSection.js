import React from 'react';
import ContactCanvas from '../components/ContactCanvas';
import ContactCard from '../components/ContactCard';
import './ContactSection.css';

// IMAGES
import myPhoto from '../img/profilowe1.jpg';
const fiverrLogo = 'https://d2nb1f6l8b7ky0.cloudfront.net/fiverr_icon.png';
const freelancerLogo = 'https://www.freelancer.com/static/css/images/landingpage/hireme-widget-builder/fl-bird-icon.png';

function ContactSection() {
    return (
        <div id="contact-section">
            <h1 id="contactTitle" className="text-center">Contact</h1>
            {/* <div id="water">
                <canvas id="canvas"></canvas>
                <ContactCanvas />
            </div> */}
            <div>
                {/* <p id="photoSource" className="text-center">Photo source: www.programmerlife.club</p> */}
                <img id="authorsPhoto" src={myPhoto} alt="Adrian Szlegel" />
            </div> 
            <div class="d-flex flex-row flex-wrap justify-content-center mb-5">
                <ContactCard 
                    photo={myPhoto} 
                    photoAlt={"Adrian Szlegel on Fiverr"} 
                    logo={fiverrLogo} 
                    logoAlt={"Fiverr"} 
                    title={"Seller"}
                    subtitle={"Programming & Tech"}
                    href={"https://www.fiverr.com/adrian_szlegel"}
                    hrefLabel={"Check out my Gigs"} />
                <ContactCard 
                    photo={myPhoto} 
                    photoAlt={"Adrian Szlegel on Freelancer"} 
                    logo={freelancerLogo} 
                    logoAlt={"Freelancer.com"} 
                    title={"Adrian Szlegel"}
                    subtitle={"Full Stack Developer"}
                    href={"https://www.freelancer.com/affiliates/email/33627630/"}
                    hrefLabel={"Hire me on Freelancer.com"} />
            </div>
        </div>
    );
}

export default ContactSection;