import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AngelEntrance({ onComplete }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text immediately
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Complete entrance after text appears
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Ethereal background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Weeping Saints text reveal */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold-300 to-amber-400 tracking-wider"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.1em", opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Weeping Saints
            </motion.h1>
            <motion.div
              className="mt-4 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}