import { motion } from 'motion/react';
import { Globe, ShoppingBag, Search, Server, Cpu, Shield, Mail } from 'lucide-react';

export default function WebDevelopment() {
  return (
    <section id="web" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
            Digital Présence & IA
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            L'excellence web pour une <br className="hidden md:block"/>
            croissance exponentielle
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Web & E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-8">
              <Globe className="w-7 h-7" />
            </div>
            <h4 className="text-3xl font-display font-bold text-gray-900 mb-4">Web & E-commerce</h4>
            <p className="text-gray-600 mb-8 font-light text-lg">
              Des expériences digitales performantes, optimisées pour la conversion et un référencement naturel optimal.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {["Site Vitrine", "Site Corporate", "E-commerce Avancé", "Landing Pages", "SEO & Visibilité"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-primary text-white rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700">
              <Server className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 text-white">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Hébergement Sécurisé</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-brand-success" /> <span>Domaine .COM / .MA</span></li>
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-brand-success" /> <span>Certificat SSL</span></li>
                <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-brand-success" /> <span>Sauvegardes auto</span></li>
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-success" /> <span>Emails professionnels</span></li>
              </ul>
            </div>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
              <Cpu className="w-64 h-64 text-brand-accent" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent font-medium text-sm mb-6 border border-brand-accent/30">
                🚀 Le futur est là
              </div>
              <h4 className="text-3xl lg:text-4xl font-display font-bold mb-6">Intelligence Artificielle & Automatisation</h4>
              <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                Connectez vos processus Odoo avec nos solutions intelligentes pour gagner en productivité. Chatbots IA, génération de documents, assistants métiers et reporting cognitif.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Chatbots IA", "Automatisation Tâches", "Assistants Métiers", "Analyse Données"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/10 text-sm font-medium border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
