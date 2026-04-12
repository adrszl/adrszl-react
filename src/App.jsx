import React, { useState, useMemo, createRef, useRef, useEffect } from 'react';
// import OldHeader from './old-components/OldHeader';
// import WelcomeSection from './old-components/WelcomeSection';
// import SliderSection from './old-containers/SliderSection';
// import AboutSection from './old-containers/AboutSection';
// import OldContactSection from './old-containers/ContactSection';
// import Footer from './old-components/Footer';
// import './App.css';
import './global.css';
import LoadingScreen from './components/loadingScreen';
import Header from './components/Header';
import HeroSection from './components/sections/Hero';
import HeroWithCarouselSection from './components/sections/HeroWithCarousel';
import AboutSection from './components/sections/About';
import SkillsCovered from './components/sections/SkillsCovered';
import { portfolioData } from './data/portfolioData';
import ChooseBySkillSection from './components/sections/ChooseBySkill';
import ContactSection from './components/sections/ContactSection';
import { scrollToSection } from './lib/helpers';
import FooterSection from './components/sections/FooterSection';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = useMemo(() => ({
    home: createRef(),
    projects: createRef(),
    about: createRef(),
    contact: createRef(),
  }), []);

  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-80px 0px 0px 0px" // 🔥 uwzględnia header
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <React.Fragment>
      <LoadingScreen />
      <Header ref={headerRef} activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection ref={sectionRefs.home} />
      <HeroWithCarouselSection portfolioData={portfolioData} ref={sectionRefs.projects} />
      <AboutSection ref={sectionRefs.about} />
      <SkillsCovered />
      <ChooseBySkillSection />
      <ContactSection ref={sectionRefs.contact} />
      <FooterSection />
    </React.Fragment>
  );
}

export default App;
