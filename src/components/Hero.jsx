import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary transition-colors duration-300">
      <div className="w-full max-w-[90rem] mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-heading text-[12vw] leading-[0.85] font-bold tracking-tighter text-text mix-blend-difference">
            SAI ANIKETH
            <br />
            <span className="text-muted/50">REDDY.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted max-w-md font-light"
          >
            Software Developer & <br />
            Creative Technologist based in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="w-32 h-32 rounded-full border border-text/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="curve"
                  d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                  fill="transparent"
                />
                <text className="text-[10px] uppercase tracking-widest fill-text font-medium">
                  <textPath href="#curve" startOffset="0%">
                    Scroll Down • View Projects •
                  </textPath>
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default Hero;
