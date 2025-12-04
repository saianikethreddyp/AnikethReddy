import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <div>
                        <h2 className="font-heading text-3xl md:text-6xl font-bold text-text mb-6 md:mb-8">
                            ABOUT <span className="text-muted/50">ME</span>
                        </h2>
                        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted font-light">
                            <p>
                                Hello! I'm Sai Aniketh Reddy, a passionate Software Developer and Creative Technologist based in India.
                                I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                            </p>
                            <p>
                                My goal is to always build products that provide pixel-perfect, performant experiences.
                                I am constantly learning new technologies and keeping up-to-date with the latest trends in the tech world.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new places, reading books, or experimenting with new design trends.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 mt-8">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors hover:scale-110 transform duration-200">
                                <Linkedin size={28} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors hover:scale-110 transform duration-200">
                                <Github size={28} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors hover:scale-110 transform duration-200">
                                <Twitter size={28} />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-accent/5 relative z-10">
                            {/* Placeholder for an image if needed, or just a decorative element */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted/20 font-heading text-9xl font-bold">
                                AR
                            </div>
                        </div>
                        <div className="absolute -inset-4 border border-text/10 rounded-2xl z-0 translate-x-4 translate-y-4" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
