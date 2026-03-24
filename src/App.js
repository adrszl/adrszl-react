import React from 'react';
import Header from './old-components/Header';
import WelcomeSection from './old-components/WelcomeSection';
import SliderSection from './old-containers/SliderSection';
import AboutSection from './old-containers/AboutSection';
import ContactSection from './old-containers/ContactSection';
import Footer from './old-components/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <WelcomeSection />
      <SliderSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
