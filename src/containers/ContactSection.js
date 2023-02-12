import React from 'react';
import ContactCard from '../components/ContactCard';
import MediaCard from '../components/MediaCard';
import ContactForm from '../components/ContactForm';
import './ContactSection.css';

// IMAGES
import myPhoto from '../img/profilowe1.jpg';
import gitHubLogo from '../img/github-logo.png'
const fiverrLogo = 'https://d2nb1f6l8b7ky0.cloudfront.net/fiverr_icon.png';
const freelancerLogo = 'https://www.freelancer.com/static/css/images/landingpage/hireme-widget-builder/fl-bird-icon.png';
const upworkLogo = 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/2f8723b99fbd7fa8ba5ca3f7653f9112';
const soloLearnLogo = 'https://lh3.googleusercontent.com/6E112cbsqydvxECh-HmlXvOG5SGXCco4jv_aXZMeMKErNEsDA06Niq7p8CULJ40_6r7G';
const hackerRankLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png';
const codeWarsLogo = 'https://i.imgur.com/2LTDqtO.png';
const courseraLogo = 'https://lh3.googleusercontent.com/13U5Vnio6xeZwOUzpOqf6lCq3phOUw80y4e9VLAONVfkEqYbME5ySDvg28CPien5dHs';
const stackOverflowLogo = 'data:image/png;base64,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';
const udemyLogo = 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg';
const khanAcademyLogo = 'https://lh3.googleusercontent.com/wr5KhcPHfYGPiVQcAHgP4zVDTVOZU7OwwUy74jsTcAKQ6r1X1NyITJnjgQXzcovmIQ';

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
                    logo={fiverrLogo}
                    logoAlt={"Fiverr"}
                    title={"Seller"}
                    subtitle={"Programming & Tech"}
                    href={"https://www.fiverr.com/adrian_szlegel"}
                    hrefLabel={"Check out my Gigs"} />
                <ContactCard
                    logo={freelancerLogo}
                    logoAlt={"Freelancer.com"}
                    title={"Adrian Szlegel"}
                    subtitle={"Full Stack Developer"}
                    href={"https://www.freelancer.com/affiliates/email/33627630/"}
                    hrefLabel={"Hire me on Freelancer.com"} />
                <ContactCard
                    logo={upworkLogo}
                    logoAlt={"Upwork.com"}
                    title={"Adrian Szlegel"}
                    subtitle={"Full Stack Developer"}
                    href={"https://www.upwork.com/freelancers/~01261b4633aacd924a?viewMode=1"}
                    hrefLabel={"Hire me on upwork.com"} 
                    customImgClasses={"mt-auto"} 
                    customImgStyles={{width: "76px"}} />
            </div>
            <h2 class="text-center mb-4">You'll also find me here:</h2>
            <div class="d-flex flex-row flex-wrap justify-content-center mb-5">
                <MediaCard
                    logo={soloLearnLogo}
                    logoAlt={"SoloLearn"}
                    title={"SoloLearn"}
                    href={"https://www.sololearn.com/Profile/4703765"} />
                <MediaCard
                    logo={hackerRankLogo}
                    logoAlt={"HackerRank"}
                    title={"HackerRank"}
                    href={"https://www.hackerrank.com/adrian95999"} />
                <MediaCard
                    logo={codeWarsLogo}
                    logoAlt={"CodeWars"}
                    title={"CodeWars"}
                    href={"https://www.codewars.com/users/adrszl"} />
                <MediaCard
                    logo={courseraLogo}
                    logoAlt={"Coursera"}
                    title={"Coursera"}
                    href={"https://www.coursera.org/user/09c9c205c6d1c9280e5d1becd5032efa"} />
                <MediaCard
                    logo={gitHubLogo}
                    logoAlt={"GitHub"}
                    title={"GitHub"}
                    href={"https://github.com/adrszl"} />
                <MediaCard
                    logo={stackOverflowLogo}
                    logoAlt={"Stack Overflow"}
                    title={"Stack Overflow"}
                    href={"https://stackoverflow.com/users/10791994/adrian95999"} />
                <MediaCard
                    logo={udemyLogo}
                    logoAlt={"Udemy"}
                    title={"Udemy"}
                    href={"https://www.udemy.com/user/adrian-szlegel/"} />
                <MediaCard
                    logo={khanAcademyLogo}
                    logoAlt={"Khan Academy"}
                    title={"Khan Academy"}
                    href={"https://www.khanacademy.org/profile/kaid_839089160785788192455283/"} />
            </div>
            <ContactForm />
        </div>
    );
}

export default ContactSection;