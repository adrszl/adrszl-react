import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import SliderSection from './containers/SliderSection';
import AboutSection from './containers/AboutSection';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <WelcomeSection />
      <SliderSection />
      <AboutSection />
    </React.Fragment>
  );
}

export default App;
