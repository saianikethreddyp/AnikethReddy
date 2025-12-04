import React from 'react';

import { portfolioData } from '../data/portfolioData';

const { skills } = portfolioData;

const Skills = () => {
    return (
        <section id="skills" className="py-20 overflow-hidden bg-primary transition-colors duration-300">
            <div className="mb-16 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-text mb-4">
                    TECHNICAL <span className="text-muted/50">ARSENAL</span>
                </h2>
            </div>

            <div className="relative flex flex-col gap-8">
                {/* Row 1 - Forward */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <span
                                key={index}
                                className="text-4xl md:text-8xl font-heading font-bold text-transparent text-outline px-4 md:px-12 hover:text-text transition-colors duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Reverse */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused]">
                        {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
                            <span
                                key={index}
                                className="text-4xl md:text-8xl font-heading font-bold text-text/10 px-4 md:px-12 hover:text-text transition-colors duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
