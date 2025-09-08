import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Settings, 
  CreditCard, 
  Users, 
  Camera, 
  Video, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Smartphone 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Website Creation",
    description: "Bespoke digital experiences that capture your brand's essence and convert visitors into devoted clients."
  },
  {
    icon: Settings,
    title: "Website Management",
    description: "Ongoing optimization and maintenance to ensure your digital presence remains flawless and performing."
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    description: "Seamless payment solutions integrated perfectly into your business operations and customer journey."
  },
  {
    icon: Users,
    title: "Client Outsourcing",
    description: "Strategic delegation services that allow you to focus on what you do best while we handle the rest."
  },
  {
    icon: Camera,
    title: "Business Photography",
    description: "Professional imagery that tells your story with sophistication, capturing the soul of your brand."
  },
  {
    icon: Video,
    title: "Business Videography",
    description: "Cinematic storytelling that brings your brand to life through compelling visual narratives."
  },
  {
    icon: FileText,
    title: "Press Release",
    description: "Expertly crafted announcements that command attention and amplify your message across all channels."
  },
  {
    icon: Shield,
    title: "Reputation Monitoring",
    description: "Vigilant protection of your brand's reputation with proactive monitoring and strategic response."
  },
  {
    icon: AlertTriangle,
    title: "Crisis Management",
    description: "Swift, strategic intervention when challenges arise, turning potential setbacks into opportunities."
  },
  {
    icon: Smartphone,
    title: "Social Media Management",
    description: "Curated digital presence that builds meaningful connections and drives authentic engagement."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-gold-500">Services</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-48 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Each service is meticulously crafted and customized to fit your unique vision and business objectives. 
            We don't believe in one-size-fits-all solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-amber-200 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-gold-100 rounded-2xl flex items-center justify-center group-hover:from-amber-200 group-hover:to-gold-200 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-amber-600 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="mt-6 h-px bg-gradient-to-r from-amber-200 via-gold-300 to-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-12 max-w-4xl mx-auto border border-amber-100">
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Customized Contracts
            </h3>
            <p className="text-xl text-slate-700 font-light leading-relaxed">
              Every partnership begins with understanding your unique needs. All contracts are thoughtfully customized 
              to align perfectly with your goals, timeline, and vision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}