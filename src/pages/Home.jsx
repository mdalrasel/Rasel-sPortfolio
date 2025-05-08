import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Projects from '../components/projects';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection  />
            <Projects />
        </div>
    );
};

export default Home;