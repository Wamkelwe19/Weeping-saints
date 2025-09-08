import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Ambient background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-light text-white mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Weeping
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-gold-400">
              Saints
            </span>
          </motion.h1>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide mb-4">
              PR & Marketing House
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-64 mx-auto mb-8"></div>
            <p className="text-3xl md:text-4xl text-white font-light tracking-wider">
              Gracefully Building
            </p>
            <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-gold-400 font-light tracking-wider">
              Unforgettable Brands
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToServices}
            className="group flex items-center mx-auto text-amber-300 hover:text-gold-400 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-lg font-light tracking-wide mr-2">Discover Our Services</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-amber-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}