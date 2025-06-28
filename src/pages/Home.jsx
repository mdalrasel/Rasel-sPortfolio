import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Projects from '../components/projects';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection  />
            <SkillSection />
            <Projects />
            <ContactSection />
        </div>
    );
};

export default Home;