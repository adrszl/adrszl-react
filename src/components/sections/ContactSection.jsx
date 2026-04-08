import { forwardRef } from "react";
import { freelacePlatforms, otherPlatformsPresence } from "../../data/experience";
import profilePicture from '../../img/profilowe1.jpg';

const WorkExperience = () => {
    return (
        <div className="work-experience" style={{ maxWidth: '75%', margin: '0 auto', textAlign: 'center' }}>
            {freelacePlatforms.length ? freelacePlatforms.map(platformData => (
                <div key={platformData.iconAlt} className="experience">
                    <div className="experience-icon">
                        <img src={platformData.icon} alt={platformData.iconAlt} />
                    </div>
                    <h3 className="experience-title">{platformData.title}</h3>
                    <p className="experience-description">
                        {platformData.description}
                    </p>
                    <a className="experience-link" href={platformData.link} target="_blank">{platformData.linkText}</a>
                </div>
            )) : null}
        </div>
    );
}

const OtherPlatformsPresence = () => {
    return (
        <div className="platforms-container" style={{ marginBottom: '80px' }}>
            {otherPlatformsPresence.length ? otherPlatformsPresence.map(platformData => (
                <a key={platformData.iconAlt} href={platformData.link} target="_blank">
                    <img src={platformData.icon} alt={platformData.iconAlt} />
                </a>
            )) : null}
        </div>
    );
}

const ContactSection = forwardRef((props, ref) => {
    return (
        <section className="contact-section" id="contact" ref={ref}>
            <div className="section-header">
                <h2 className="section-title">Contact</h2>
                <div className="prism-line" style={{ maxWidth: '1200px' }}></div>
            </div>

            <img src={profilePicture} style={{ boxShadow: '0px 0px 80px #000', borderRadius: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '160px', marginBottom: '80px' }} />

            <WorkExperience />

            <h3 style={{ fontSize: '25px', margin: '160px 0 80px 0', textAlign: 'center' }}>You'll also find me here:</h3>

            <OtherPlatformsPresence />

            <div className="contact-container">
                <div className="contact-info">
                    <a href="https://maps.app.goo.gl/Xxebn2cWUSAMHtU29" target="_blank" className="info-item">
                        <div className="info-icon">📍</div>
                        <div className="info-text">
                            <h4>Location</h4>
                            <p>Poznań, Poland</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/adrian-szlegel/" target="_blank" className="info-item">
                        <div className="info-icon">📧</div>
                        <div className="info-text">
                            <h4>LinkedIn</h4>
                        </div>
                    </a>

                </div>

                <form className="contact-form" id="contactForm" action="https://app.99inbound.com/api/e/ZcuIhPX9" method="POST" target="_blank">
                    <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" name="name" required autoComplete="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAdress">Email*</label>
                        <input type="email" id="emailAdress" name="emailAdress" required autoComplete="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" id="companyName" name="companyName" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>


                    <div style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="checkbox" name="grandpas_salmon_spotted_lake" value="1" tabIndex="-1" autoComplete="no" />
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
});

export default ContactSection;