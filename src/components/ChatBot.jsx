import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! I'm Aniketh's virtual assistant. Ask me about his skills, projects, experience, or how to contact him!",
            sender: 'bot'
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const generateResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes('skill') || lowerQuery.includes('stack') || lowerQuery.includes('technolog')) {
            return `Aniketh is proficient in: ${portfolioData.skills.join(', ')}.`;
        }

        if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('built')) {
            const projectNames = portfolioData.projects.map(p => p.title).join(', ');
            return `Here are some of his key projects: ${projectNames}. You can ask for details about a specific one!`;
        }

        if (lowerQuery.includes('experience') || lowerQuery.includes('job') || lowerQuery.includes('work history')) {
            const latest = portfolioData.education[0]; // Using education as proxy for now if no job experience listed, or just general info
            // Actually, let's look at the data structure. It has education and certifications.
            // The user might have meant "experience" as in work experience, but the current data only has education/certs.
            // Let's list education for now as "background".
            return `Aniketh is currently pursuing his ${latest.degree} at ${latest.school}. He has also completed certifications in ${portfolioData.certifications.map(c => c.name).join(', ')}.`;
        }

        if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
            return `You can reach him at ${portfolioData.personalInfo.email} or call ${portfolioData.personalInfo.phone}.`;
        }

        if (lowerQuery.includes('about') || lowerQuery.includes('who is')) {
            return portfolioData.personalInfo.bio[0] + " " + portfolioData.personalInfo.bio[2];
        }

        // Check for specific project details
        const foundProject = portfolioData.projects.find(p => lowerQuery.includes(p.title.toLowerCase()));
        if (foundProject) {
            return `${foundProject.title}: ${foundProject.description} (Category: ${foundProject.category})`;
        }

        return "I'm not sure about that. Try asking about skills, projects, education, or contact info!";
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: input,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: generateResponse(userMessage.text),
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-50 p-4 bg-text text-primary rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
            >
                <MessageCircle size={28} />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-primary border border-text/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-text/10 flex justify-between items-center bg-secondary/50 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-text/10 flex items-center justify-center">
                                    <Bot size={20} className="text-text" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-text">Assistant</h3>
                                    <p className="text-xs text-muted flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-text/5 rounded-full transition-colors text-muted hover:text-text"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-text/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-text text-primary rounded-tr-none'
                                                : 'bg-text/5 text-text border border-text/10 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-text/10 bg-secondary/50 backdrop-blur-sm">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask something..."
                                    className="flex-1 bg-text/5 border border-text/10 rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-text/30 transition-colors placeholder:text-muted/50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-3 bg-text text-primary rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
