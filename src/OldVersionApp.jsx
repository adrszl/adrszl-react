import React from 'react';
import OldHeader from './old-components/OldHeader';
import WelcomeSection from './old-components/WelcomeSection';
import SliderSection from './old-containers/SliderSection';
import AboutSection from './old-containers/AboutSection';
import ContactSection from './old-containers/ContactSection';
import Footer from './old-components/Footer';
import './App.css';

function OldVersionApp() {
  return (
    <React.Fragment>
      <OldHeader />
      <WelcomeSection />
      <SliderSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

export default OldVersionApp;