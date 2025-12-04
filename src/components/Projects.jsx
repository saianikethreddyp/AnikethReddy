import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

import { portfolioData } from '../data/portfolioData';

const { projects } = portfolioData;

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-primary transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex items-end justify-between mb-20">
                    <h2 className="font-heading text-6xl md:text-8xl font-bold text-text">
                        SELECTED <br />
                        <span className="text-muted/30">WORKS</span>
                    </h2>
                    <span className="hidden md:block text-muted text-xl">(03)</span>
                </div>

                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="group relative w-full min-h-[60vh] md:min-h-[70vh] h-auto rounded-[2rem] overflow-hidden border border-text/5 bg-secondary transition-all duration-500"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="text-xl font-medium text-text/60">0{project.id}</span>
                                    <div className="flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-text text-primary flex items-center justify-center hover:scale-110 transition-transform">
                                            <ArrowUpRight size={20} />
                                        </button>
                                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-text/10 backdrop-blur-md text-text flex items-center justify-center hover:bg-text/20 transition-colors">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <div className="overflow-hidden mb-4">
                                        <h3 className="font-heading text-4xl md:text-7xl font-bold text-text translate-y-0 transition-transform duration-500">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-t border-text/10 pt-6 md:pt-8">
                                        <p className="text-lg md:text-xl text-muted max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-4 md:gap-8 text-sm font-medium tracking-wider uppercase text-text/60">
                                            <span>{project.category}</span>
                                            <span>{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
