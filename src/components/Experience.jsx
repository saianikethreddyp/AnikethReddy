import React from 'react';
import { motion } from 'framer-motion';

import { portfolioData } from '../data/portfolioData';

const { education, certifications } = portfolioData;

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Education */}
                <div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-12">
                        EDUCATION
                    </h2>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group border-l-2 border-text/10 pl-8 hover:border-text transition-colors duration-500"
                            >
                                <span className="text-sm text-muted font-medium tracking-widest uppercase mb-2 block">{edu.date}</span>
                                <h3 className="text-2xl font-heading font-bold text-text mb-1 group-hover:text-text/80 transition-colors">{edu.school}</h3>
                                <p className="text-lg text-muted/80">{edu.degree}</p>
                                <p className="text-sm text-muted/50 mt-2">{edu.score}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-12">
                        CERTIFICATIONS
                    </h2>

                    <div className="grid gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border border-text/10 hover:bg-text/5 transition-colors duration-300"
                            >
                                <h3 className="text-xl font-heading font-bold text-text mb-2">{cert.name}</h3>
                                <div className="flex justify-between items-center text-sm text-muted">
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
