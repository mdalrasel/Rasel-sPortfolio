import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import Projects from '../components/projects';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div>
            <section id="home">
                <HeroSection />
            </section>

            <section id="about">
                <AboutSection />
            </section>

            <section id="skills">
                <SkillSection />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <ContactSection />
            </section>
        </div>
    );
};

export default Home;
