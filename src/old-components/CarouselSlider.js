import React from 'react';

// CAROUSEL
import Carousel from 'react-bootstrap/Carousel';

// TOOLTIP
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// STYLES
import './CarouselSlider.css';

// IMAGES
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import project5 from '../img/project5.png';
import project6 from '../img/project6.png';
import project7 from '../img/project7.png';
import project8 from '../img/project8.png';
import project9 from '../img/project9.png';
import project10 from '../img/project10.png';

import project13 from '../img/project13.png';

// TOOLTIPS
const tooltipsContent = {
    personalPortfolio: 'Simple page intended to be "Web business card"',
    tributePage: 'Simple page intended to be landing page with static content',
    surveyForm: 'Sample implementation of survey of some kind with some author\'s stylization',
    productLandingPage: 'Sample implementation of landing page for example for a product',
    technicalDocumentationPage: 'Sample implementation of technical documentation page',
    romanNumeralConverter: 'Converter which converts number from decimal to roman and vice versa',
    palindromeChecker: 'Checks if given phrase is a palindrome',
    usTelephoneNumberValidator: 'Validator checks if given number is valid US one',
    caesarsCipher: 'Encrypts and decrypts given phrase with Caesars Cipher',
    commercialWebsite1: 'Personal website for Mr. Arkadiusz Trajdos',
    commercialWebsite4: 'Website for Magna Polonia academic corporation'
}

function CarouselSlider() {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={project10} alt="Tenth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-1">{ tooltipsContent.commercialWebsite1 }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Website</span>
                            <span className="badge bg-secondary me-2">2019</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary me-2">CSS</span>
                            <span className="badge rounded-pill bg-primary me-2">JS</span>
                            <span className="badge rounded-pill bg-primary me-2">PHP</span>
                            <span className="badge rounded-pill bg-primary">Wordpress</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project13} alt="Thirteenth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-2">{ tooltipsContent.commercialWebsite4 }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Website</span>
                            <span className="badge bg-secondary me-2">2018 - now</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary me-2">CSS</span>
                            <span className="badge rounded-pill bg-primary me-2">JS</span>
                            <span className="badge rounded-pill bg-primary me-2">PHP</span>
                            <span className="badge rounded-pill bg-primary">Wordpress</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project1} alt="First project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-3">{ tooltipsContent.personalPortfolio }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Personal Portfolio Webpage</span>
                            <span className="badge bg-secondary me-2">2018</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary">CSS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project2} alt="Second project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-4">{ tooltipsContent.tributePage }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Tribute Page (Simple Landing Page)</span>
                            <span className="badge bg-secondary me-2">2018</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary">CSS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project3} alt="Third project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-5">{ tooltipsContent.surveyForm }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Survey Form</span>
                            <span className="badge bg-secondary me-2">2018</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary">CSS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project4} alt="Fourth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-6">{ tooltipsContent.productLandingPage }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Product Landing Page</span>
                            <span className="badge bg-secondary me-2">2018</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary">CSS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project5} alt="Fifth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-7">{ tooltipsContent.technicalDocumentationPage }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Technical Documentation Page</span>
                            <span className="badge bg-secondary me-2">2018</span>
                            <span className="badge rounded-pill bg-primary me-2">HTML</span>
                            <span className="badge rounded-pill bg-primary">CSS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project6} alt="Sixth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-8">{ tooltipsContent.romanNumeralConverter }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Roman Numeral Converter</span>
                            <span className="badge bg-secondary me-2">2019</span>
                            <span className="badge rounded-pill bg-primary">JS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project7} alt="Seventh project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-9">{ tooltipsContent.palindromeChecker }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Palindrome Checker</span>
                            <span className="badge bg-secondary me-2">2019</span>
                            <span className="badge rounded-pill bg-primary">JS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project8} alt="Eighth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-10">{ tooltipsContent.usTelephoneNumberValidator }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">US Telephone Number Validator</span>
                            <span className="badge bg-secondary me-2">2019</span>
                            <span className="badge rounded-pill bg-primary">JS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project9} alt="Nineth project" />
                <Carousel.Caption>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-11">{ tooltipsContent.caesarsCipher }</Tooltip>}>
                        <h3 className="slide-title">
                            <span className="me-2">Caesars Cipher</span>
                            <span className="badge bg-secondary me-2">2019</span>
                            <span className="badge rounded-pill bg-primary">JS</span>
                        </h3>
                    </OverlayTrigger>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;