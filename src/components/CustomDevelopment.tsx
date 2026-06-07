import { motion } from 'motion/react';
import { Blocks, Code, Webhook, Workflow } from 'lucide-react';

export default function CustomDevelopment() {
  const features = [
    "Développement de modules Odoo sur mesure",
    "Connecteurs API",
    "Intégration ERP",
    "Développement POS personnalisé",
    "Automatisation des workflows",
    "Personnalisation avancée",
    "Développement d'applications métier",
    "Portails clients & fournisseurs",
    "Reporting personnalisé",
    "Migration & Upgrade Odoo",
    "Maintenance Odoo"
  ];

  return (
    <section id="development" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-accent tracking-wider uppercase mb-3">
              Développement Sur-Mesure
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Odoo, façonné exactement <br className="hidden md:block"/>
              pour vos spécificités
            </h3>
            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
              Nous n'imposons pas nos processus à votre entreprise, nous adaptons Odoo à votre réalité métier grâce à des développements spécifiques haute performance.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="glass-panel bg-white/5 border-white/10 p-5 rounded-xl">
                <Blocks className="w-8 h-8 text-brand-accent mb-4" />
                <h4 className="font-bold text-lg mb-2">Modules Métier</h4>
                <p className="text-sm text-gray-400">Création de fonctionnalités 100% dédiées à vos processus.</p>
              </div>
              <div className="glass-panel bg-white/5 border-white/10 p-5 rounded-xl">
                <Webhook className="w-8 h-8 text-[#00C48C] mb-4" />
                <h4 className="font-bold text-lg mb-2">Connecteurs API</h4>
                <p className="text-sm text-gray-400">Intégration d'Odoo avec vos applications tierces existantes.</p>
              </div>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-xl"
          >
            <h4 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <Code className="text-brand-accent" />
              Expertise Technique
            </h4>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
