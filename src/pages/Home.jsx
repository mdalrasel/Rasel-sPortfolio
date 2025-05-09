import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Projects from '../components/projects';
import ParticleBackground from '../components/ParticleBackground ';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ParticleBackground></ParticleBackground>
            <AboutSection  />
            <Projects />
        </div>
    );
};

export default Home;