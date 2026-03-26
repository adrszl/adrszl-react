import React from 'react';
import OldHeader from './old-components/OldHeader';
import WelcomeSection from './old-components/WelcomeSection';
import SliderSection from './old-containers/SliderSection';
import AboutSection from './old-containers/AboutSection';
import ContactSection from './old-containers/ContactSection';
import Footer from './old-components/Footer';
import './App.css';
// import './global.css';
// import LoadingScreen from './components/loadingScreen';
// import Header from './components/Header';
// import HeroSection from './components/sections/Hero';

function App() {
  return (
    <React.Fragment>
      {/* <LoadingScreen />
      <Header />
      <HeroSection /> */}
      <OldHeader />
      <WelcomeSection />
      <SliderSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
