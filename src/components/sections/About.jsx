import { useState, useEffect, useRef } from 'react';
import { certificatesData } from '../../data/certifications';

const AboutSection = () => {
    const [expanded, setExpanded] = useState(false);

    const lastVisibleRef = useRef(null);

    useEffect(() => {
        if (!expanded && lastVisibleRef.current) {
            lastVisibleRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [expanded]);

    const generateCertificates = () => {
        return certificatesData.map((certificate, index) => {
            const isHidden = !expanded && index >= 9;

            return (
                <div
                    key={`certification-${certificate.date}-${certificate.title}`}
                    className={`certificate ${isHidden ? 'hidden fade-out' : ''}`}
                    style={{
                        transition: 'opacity 0.6s ease, transform 0.6s ease',
                        opacity: isHidden ? 0 : 1,
                        transform: isHidden ? 'translateY(-10px)' : 'translateY(0)',
                    }}
                    ref={index === 8 ? lastVisibleRef : null}
                >
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <h4>{certificate.date}</h4>
                    <p className="certificate-description">{certificate.description}</p>
                    {certificate.link && (
                        <a
                            href={certificate.link}
                            className="certificate-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Show certificate
                        </a>
                    )}
                </div>
            );
        });
    };

    return (
        <section className="philosophy-section" id="about">
            <div className="philosophy-container">
                <h2 style={{ fontSize: '56px', marginBottom: '2rem' }}>About</h2>
                <div className="prism-line"></div>

                <h3 className="about-headline">
                    Certifications
                </h3>

                <p className="philosophy-subheading">
                    All of the certifications can be validated by entering the link. You can also check skills coverage <a
                        href="#skills">here</a>
                </p>

                <div id="certifications" className="certifications">
                    {/* Certificates will be generated generateCertificates function */}
                    {generateCertificates()}
                    <button
                        className="see-more-button"
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'Hide' : 'See more'}
                    </button>

                    <div className="philosophy-particles particles" id="particles">
                        {/* Particles will be generated generateCertificates function */}
                    </div>
                </div>

                <h3 className="about-headline" style={{ margin: '160px 0 80px 0' }}>
                    Experience
                </h3>

                <div className="work-experience">
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Senior Fullstack Developer</h3>
                        <h4>FEB 2025 - DEC 2025</h4>
                        <p className="experience-description">
                            VIER
                        </p>

                        <a href="https://www.vier.ai/en/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Senior Software Engineer</h3>
                        <h4>JUN 2022 - SEP 2024</h4>
                        <p className="experience-description">
                            IQVIA
                        </p>

                        <a href="https://www.iqvia.com/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Front End Developer</h3>
                        <h4>APR 2020 - JUN 2022</h4>
                        <p className="experience-description">
                            TTMS
                        </p>

                        <a href="https://ttms.pl/en/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Full Stack Developer</h3>
                        <h4>JUN 2019 - FEB 2020</h4>
                        <p className="experience-description">
                            OAKnode
                        </p>

                        <a href="https://oaknode.com/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Front End Developer</h3>
                        <h4>JAN 2019 - APR 2019</h4>
                        <p className="experience-description">
                            Sealcode
                        </p>

                        <a href="https://www.sealcode.org/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Junior JavaScript/React Developer</h3>
                        <h4>DEC 2018 - DEC 2019</h4>
                        <p className="experience-description">
                            Nefeni Sp. z o.o.
                        </p>

                        <a href="https://nefeni.pl/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Appium Tester</h3>
                        <h4>OCT 2017 - AUG 2018</h4>
                        <p className="experience-description">
                            Nefeni Sp. z o.o.
                        </p>

                        <a href="https://nefeni.pl/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                    <div className="experience">
                        <h3 className="experience-title">Junior Front End Developer</h3>
                        <h4>DEC 2016 - JUN 2017</h4>
                        <p className="experience-description">
                            Nefeni Sp. z o.o.
                        </p>

                        <a href="https://nefeni.pl/" className="experience-link" target="_blank" rel="noreferrer">
                            Website
                        </a>

                    </div>
                    {/* experience card */}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;