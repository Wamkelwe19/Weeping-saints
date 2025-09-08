import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-gold-400">
              Together
            </span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-48 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your brand into something extraordinary? 
            Reach out and let's begin crafting your unforgettable story.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <motion.div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-gold-400/20 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-8 h-8 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">Direct professional contact</p>
                </div>
              </div>
              
              <a 
                href="mailto:weepingsaints.contact@gmail.com"
                className="inline-flex items-center text-amber-300 hover:text-gold-400 transition-colors duration-300 text-lg group-hover:translate-x-2 transform transition-transform duration-300"
              >
                weepingsaints.contact@gmail.com
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* Instagram Contact */}
            <motion.div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-gold-400/20 rounded-2xl flex items-center justify-center mr-4">
                  <Instagram className="w-8 h-8 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">Follow Us</h3>
                  <p className="text-slate-400">See our latest work & insights</p>
                </div>
              </div>
              
              <a 
                href="https://instagram.com/Weepingsaints.pr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-300 hover:text-gold-400 transition-colors duration-300 text-lg group-hover:translate-x-2 transform transition-transform duration-300"
              >
                @Weepingsaints.pr
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-amber-400/10 to-gold-400/10 rounded-3xl p-12 border border-amber-400/20 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Brand Deserves Excellence
              </h3>
              <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                Every project is a collaboration, every solution is bespoke, and every result is designed 
                to exceed your expectations. Let's build something remarkable together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}