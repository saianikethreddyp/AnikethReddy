import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary transition-colors duration-300">
            <div className="max-w-[90rem] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    <div>
                        <h2 className="font-heading text-5xl md:text-8xl font-bold text-text mb-8 md:mb-12 leading-[0.9]">
                            LET'S WORK <br />
                            <span className="text-muted/30">TOGETHER</span>
                        </h2>

                        <div className="space-y-8 text-lg">
                            <a href="mailto:saianikethreddy@gmail.com" className="flex items-center gap-4 text-muted hover:text-text transition-colors group">
                                <Mail className="group-hover:scale-110 transition-transform" />
                                saianikethreddy@gmail.com
                            </a>
                            <div className="flex items-center gap-4 text-muted">
                                <Phone />
                                9398840252
                            </div>
                            <div className="flex items-center gap-4 text-muted">
                                <MapPin />
                                Medak, Telangana 502102
                            </div>
                            <div className="flex items-center gap-6 pt-4">
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
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-medium tracking-widest uppercase text-muted">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-text/20 py-4 text-xl text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/10"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium tracking-widest uppercase text-muted">Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-text/20 py-4 text-xl text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/10"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium tracking-widest uppercase text-muted">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-transparent border-b border-text/20 py-4 text-xl text-text focus:outline-none focus:border-text transition-colors placeholder:text-text/10 resize-none"
                                placeholder="Tell me about your project"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group flex items-center gap-4 text-2xl font-heading font-bold text-text hover:text-text/80 transition-colors"
                        >
                            SEND MESSAGE
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
