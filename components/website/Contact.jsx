// src/components/website/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  // Read env vars (Vite requires VITE_ prefix)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (PUBLIC_KEY) {
      // initialize EmailJS with your public key (optional if you pass publicKey in send)
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('Email service not configured. Check environment variables.');
      return;
    }

    setSending(true);
    setStatus('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // You can pass PUBLIC_KEY as the 4th arg OR rely on emailjs.init(PUBLIC_KEY) above.
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS send error', err);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-gold-400">Together</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-48 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your brand into something extraordinary? Reach out and let's begin crafting your unforgettable story.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-white mb-2 text-lg font-light">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-slate-400 focus:border-amber-400/30 focus:outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-lg font-light">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-slate-400 focus:border-amber-400/30 focus:outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-white mb-2 text-lg font-light">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-slate-400 focus:border-amber-400/30 focus:outline-none transition-all duration-300"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-to-r from-amber-400 to-gold-400 text-black py-4 px-12 rounded-2xl font-semibold text-lg hover:from-amber-300 hover:to-gold-300 transform hover:scale-105 transition-all duration-300 disabled:opacity-60"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>

            {status && (
              <p className={`mt-6 text-lg ${status.includes('successfully') ? 'text-amber-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </div>
        </form>

        {/* ...existing email/instagram contact cards retained below... */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-gold-400/20 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-8 h-8 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">Direct professional contact</p>
                </div>
              </div>
              <a href="mailto:weepingsaints.contact@gmail.com" className="inline-flex items-center text-amber-300 hover:text-gold-400 transition-colors duration-300 text-lg group-hover:translate-x-2 transform transition-transform duration-300">
                weepingsaints.contact@gmail.com
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            <motion.div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-gold-400/20 rounded-2xl flex items-center justify-center mr-4">
                  <Instagram className="w-8 h-8 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">Follow Us</h3>
                  <p className="text-slate-400">See our latest work & insights</p>
                </div>
              </div>
              <a href="https://instagram.com/Weepingsaints.pr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-300 hover:text-gold-400 transition-colors duration-300 text-lg group-hover:translate-x-2 transform transition-transform duration-300">
                @Weepingsaints.pr
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
