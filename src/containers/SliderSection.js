import React from 'react';
import Carousel from '../components/CarouselSlider';

function SliderSection() {
    return(
        <div id="project-section">
            <div id="covering">
                <h1 id="projectsTitle" className="text-center">Projects</h1>
                <p className="text-center">Hover title for more info</p>
                <p className="text-center mb-4">Click image to visit project</p>
                <div className="container mx-auto">
                    <div className="row row-content">
                        <div className="col">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderSection;