import React from 'react';
import ExperienceCard from '../components/ExperienceCard'; 
import './AboutSection.css';

function AboutSection() {
    return (
        <div id="about-section">
            <h1 id="aboutTitle" className="text-center">About</h1>
            <hr />
            <h2 className="text-center">Certifications</h2>
            <div className="row certifications">
                {/* karty kursów */}
                <ExperienceCard 
                    title={"More to come..."} 
                    year={"2023"} 
                    details={"I'm working hard every day to improve my qualifications"} 
                    link={false}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Learning webpack 4"} 
                    year={"JUL 2022"} 
                    details={"Webpack, JS, React"} 
                    link={"https://www.linkedin.com/learning/certificates/015ed31fae06d48aebffe7a7da5f360f6245a6dd6a926380a17c5bc9909f980d"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"React: Using TypeScript"} 
                    year={"JUN 2022"} 
                    details={"JS, TypeScript, React"} 
                    link={"https://www.linkedin.com/learning/certificates/1838d89f2f2d2f45d7c4807cba5c69d9c1ad25e0de66a35082bad9a994fcfe78"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"TypeScript Essential Training"} 
                    year={"JUN 2022"} 
                    details={"JS, TypeScript"} 
                    link={"https://www.linkedin.com/learning/certificates/0518b7dc53516e37e7fda7d5f92e1ae3ad7d02e2ae0b0012bfc1610a730c1a83"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Sass Workflow"} 
                    year={"AUG 2019"} 
                    details={"CSS, SASS"} 
                    link={"https://www.udemy.com/certificate/UC-E14HRP8U/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Front-End Web Development with React"} 
                    year={"JUL 2019"} 
                    details={"HTML, CSS, JavaScript, React, Redux"} 
                    link={"https://www.coursera.org/account/accomplishments/verify/X6V46CFRKA49"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"CSS Flexbox - Mastering the Basics"} 
                    year={"MAR 2019"} 
                    details={"CSS, Flexbox"} 
                    link={"https://www.udemy.com/certificate/UC-1SLEQ023/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"JavaScript Algorithms and Data Structures"} 
                    year={"FEB 2019"} 
                    details={"JavaScript"} 
                    link={"https://www.freecodecamp.org/certification/fcc0176f6e9-28d2-4c52-b6c5-1bb0a86d1dd8/javascript-algorithms-and-data-structures"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Front-End Web UI Frameworks and Tools: Bootstrap 4"} 
                    year={"JAN 2019"} 
                    details={"HTML, CSS, JS, jQuery, NPM and Bootstrap"} 
                    link={"https://www.coursera.org/account/accomplishments/records/2QC2NK24RP9S"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Modern React with Redux"} 
                    year={"OCT 2018"} 
                    details={"React, Redux, NPM, Webpack, Babel, ES6/ES2015 Javascript syntax"} 
                    link={"https://www.udemy.com/certificate/UC-B2DVW7TK/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Responsive Web Design"} 
                    year={"OCT 2018"} 
                    details={"Developer Certification, representing approximately 300 hours of coursework"} 
                    link={"https://www.freecodecamp.org/certification/fcc0176f6e9-28d2-4c52-b6c5-1bb0a86d1dd8/responsive-web-design"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Web Applications for Everybody specialization"} 
                    year={"SEP 2018"} 
                    details={"Specialization consists of four courses"} 
                    link={"https://www.coursera.org/account/accomplishments/specialization/2XY23PCMMRSF"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"JavaScript, jQuery, and JSON"} 
                    year={"SEP 2018"} 
                    details={"Fourth course from specialization Web Applications for Everybody specialization"} 
                    link={"https://www.coursera.org/account/accomplishments/verify/PN2BECHAQF6H"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Building Database Applications in PHP"} 
                    year={"AUG 2018"} 
                    details={"Third course from specialization Web Applications for Everybody specialization"} 
                    link={"https://www.coursera.org/account/accomplishments/verify/LW4SXBVPWCBC"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Converting HTML5 Template to a WordPress Theme"} 
                    year={"APR 2018"} 
                    details={"Course about how to get a fully functional, highly dynamic WordPress theme using an HTML template"} 
                    link={"https://www.udemy.com/certificate/UC-NFU00RPY/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Introduction to Structured Query Language (SQL)"} 
                    year={"APR 2018"} 
                    details={"Second course from specialization Web Applications for Everybody specialization"} 
                    link={"https://www.coursera.org/account/accomplishments/verify/PK7T5JZWGV9M"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"SQL Course"} 
                    year={"APR 2018"} 
                    details={"All necessary concepts about SQL and a bit of more advanced"} 
                    link={"https://www.sololearn.com/Certificate/1060-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Building Web Applications in PHP"} 
                    year={"MAR 2018"} 
                    details={"First course from specialization Web Applications for Everybody specialization"} 
                    link={"https://www.coursera.org/account/accomplishments/verify/GPEXW8EEGLJN"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Building Wordpress Website - Elementor Page Builder"} 
                    year={"MAR 2018"} 
                    details={"Creating Wordpress website from A to Z"} 
                    link={"https://www.udemy.com/certificate/UC-2G5J2UL9/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"CSS Course"} 
                    year={"2018"} 
                    details={"Everything to know about CSS"} 
                    link={"https://www.sololearn.com/Certificate/1023-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"PHP Course"} 
                    year={"MAR 2018"} 
                    details={"All necessary concepts about PHP and a bit of more advanced"} 
                    link={"https://www.sololearn.com/Certificate/1059-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"WordPress Basics: How To Manage Your Website"} 
                    year={"MAR 2018"} 
                    details={"All the fundamentals necessary to manage and create Wordpress website"} 
                    link={"https://www.udemy.com/certificate/UC-UA4T2QA1/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"HTML Course"} 
                    year={"FEB 2018"} 
                    details={"Everything to know about HTML"} 
                    link={"https://www.sololearn.com/Certificate/1014-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"JavaScript Course (2)"} 
                    year={"FEB 2018"} 
                    details={"Another course with all necessary concepts about JavaScript and a bit of more advanced"} 
                    link={"https://www.udemy.com/certificate/UC-CFD4S1QX/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"Java Course"} 
                    year={"JAN 2018"} 
                    details={"All necessary concepts about Java and a bit of more advanced"} 
                    link={"https://www.sololearn.com/Certificate/1068-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"JavaScript Course"} 
                    year={"JAN 2018"} 
                    details={"All necessary concepts about JavaScript and a bit of more advanced"} 
                    link={"https://www.sololearn.com/Certificate/1024-4703765/pdf/"}
                    type={'learning'}/>
                <ExperienceCard 
                    title={"jQuery Course"} 
                    year={"JAN 2018"} 
                    details={"All necessary concepts about jQuery and a bit of more advanced"} 
                    link={"https://www.sololearn.com/Certificate/1082-4703765/pdf/"}
                    type={'learning'}/>
            </div>
            <h2 className="text-center my-4">Experience</h2>
            <div className="row certifications">
            <ExperienceCard 
                    title={"Senior Software Engineer"} 
                    year={"JUN 2022 - NOW"} 
                    details={"IQVIA"} 
                    link={"https://www.iqvia.com/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Front End Developer"} 
                    year={"APR 2020 - JUN 2022"} 
                    details={"TTMS"} 
                    link={"https://ttms.pl/en/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Full Stack Developer"} 
                    year={"JUN 2019 - FEB 2020"} 
                    details={"OAKnode"} 
                    link={"https://oaknode.com/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Front End Developer"} 
                    year={"JAN 2019 - APR 2019"} 
                    details={"Sealcode"} 
                    link={"https://www.sealcode.org/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Junior JavaScript/React Developer"} 
                    year={"DEC 2018 - DEC 2019"} 
                    details={"Sputnik Software"} 
                    link={"http://sputnik.pl/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Appium Tester"} 
                    year={"OCT 2017 - AUG 2018"} 
                    details={"Sputnik Software"} 
                    link={"http://sputnik.pl/"}
                    type={"experience"}/>
                <ExperienceCard 
                    title={"Junior Front End Developer"} 
                    year={"DEC 2016 - JUN 2017"} 
                    details={"Sputnik Software"} 
                    link={"http://sputnik.pl/"}
                    type={"experience"}/>
            </div>
        </div>
    );
}

export default AboutSection;