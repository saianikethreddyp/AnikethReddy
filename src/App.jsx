import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-primary overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ChatBot />
      <footer className="text-center py-8 text-muted text-sm">
        <p>© {new Date().getFullYear()} Sai Aniketh Reddy Papayagari. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
