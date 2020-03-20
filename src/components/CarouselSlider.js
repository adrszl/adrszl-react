import React from 'react';

// CAROUSEL
import Carousel from 'react-bootstrap/Carousel';

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

function CarouselSlider() {
    return(
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={project1} alt="First project" />
                <Carousel.Caption>
                    <h3>Personal Portfolio Webpage</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project2} alt="Second project" />
                <Carousel.Caption>
                    <h3>Tribute Page (Simple Landing Page)</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project3} alt="Third project" />
                <Carousel.Caption>
                    <h3>Survey Form</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project4} alt="Fourth project" />
                <Carousel.Caption>
                    <h3>Product Landing Page</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project5} alt="Fifth project" />
                <Carousel.Caption>
                    <h3>Technical Documentation Page</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project6} alt="Sixth project" />
                <Carousel.Caption>
                    <h3>Roman Numeral Converter</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project7} alt="Seventh project" />
                <Carousel.Caption>
                    <h3>Palindrome Checker</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project8} alt="Eighth project" />
                <Carousel.Caption>
                    <h3>US Telephone Number Validator</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project9} alt="Nineth project" />
                <Carousel.Caption>
                    <h3>Caesars Cipher</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={project10} alt="Tenth project" />
                <Carousel.Caption>
                    <h3>Website</h3>
                    <p>Description</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;