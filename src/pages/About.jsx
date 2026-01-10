import React from 'react';
import './About.css';
import aboutHero from '../assets/about-hero.png';
import aboutSourcing from '../assets/about-sourcing.png';
import { GiTeapot, GiMeditation, GiMountains } from 'react-icons/gi';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section
                className="about-hero"
                style={{ backgroundImage: `url(${aboutHero})` }}
            >
                <div className="hero-content">
                    <h1 className="hero-title">The Art of Stillness</h1>
                    <p className="hero-subtitle">Brewing clarity in a chaotic world.</p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section">
                <h2 className="section-title">Our Philosophy</h2>
                <p className="philosophy-text">
                    In an age of instant gratification, we choose the slow path. Tea is not merely a beverage; it is a ritual, a pause, a breath.
                    We believe that inside every leaf lies a story of the soil, the rain, and the hands that plucked it.
                    Our mission is not just to sell tea, but to curate moments of absolute presence. When you sip our tea, you aren't just tasting flavor—you are tasting time itself, slowed down to a perfect stillness.
                </p>
            </section>

            {/* The Journey Section */}
            <section className="journey-section">
                <div
                    className="journey-image"
                    style={{ backgroundImage: `url(${aboutSourcing})` }}
                ></div>
                <div className="journey-content">
                    <h2 className="journey-title">The Hunt for the Perfect Leaf</h2>
                    <p className="journey-desc">
                        We don’t rely on catalogs. We rely on compasses. Our sourcing team treks into the mist-covered mountains of Yunnan, the high-altitude peaks of Darjeeling, and the hidden valleys of Japan.
                    </p>
                    <p className="journey-desc">
                        We forge relationships with generational farmers who treat their bushes like family. We trade in fair prices and mutual respect, ensuring that the legacy of these ancient gardens thrives for centuries to come.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <h2 className="section-title">Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <GiTeapot className="value-icon" />
                        <h3 className="value-title">Purity</h3>
                        <p>No artificial flavors. No shortcuts. Just the honest, unadulterated expression of the tea leaf.</p>
                    </div>
                    <div className="value-card">
                        <GiMeditation className="value-icon" />
                        <h3 className="value-title">Mindfulness</h3>
                        <p>We advocate for the 'Tea Mind'—approaching life with the same attention and care as a tea ceremony.</p>
                    </div>
                    <div className="value-card">
                        <GiMountains className="value-icon" />
                        <h3 className="value-title">Origin</h3>
                        <p>Every batch is traceable to a specific garden. We honor the geography that gives our tea its soul.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
