import React from 'react';
import ExperienceCard from '../components/ExperienceCard'; 
import './AboutSection.css';

function AboutSection() {
    return (
        <div id="about-section">
            <h1 id="aboutTitle" className="text-center">About</h1>
            <hr />
            <h2 className="text-center">Certifications</h2>
            <div className="row">
                {/* karty kursów */}
                <ExperienceCard 
                    order={1} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={2} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={3} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={4} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={5} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={6} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={7} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={8} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={9} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={10} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    order={11} 
                    title={"More to come..."} 
                    year={"2019"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
            </div>
            <h2 className="text-center">Experience</h2>
            <div className="row">
                {/* karty doświadczenia zawodowego */}
            </div>
        </div>
    );
}

export default AboutSection;