import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: "01", title: "Audit Gratuit", desc: "Évaluation de vos processus actuels et identification de vos besoins." },
    { num: "02", title: "Analyse & Cahier des Charges", desc: "Cartographie détaillée et définition de la solution cible." },
    { num: "03", title: "Configuration Odoo", desc: "Paramétrage standard et adaptation de la plateforme." },
    { num: "04", title: "Développement Sur-Mesure", desc: "Création de modules spécifiques propres à votre métier." },
    { num: "05", title: "Formation Utilisateurs", desc: "Accompagnement de vos équipes pour garantir l'adoption." },
    { num: "06", title: "Déploiement & Lancement", desc: "Mise en production sécurisée et transfert de données." },
    { num: "07", title: "Support Continu", desc: "Maintenance, assistance et évolutions fonctionnelles." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
              Processus Atlas Digital
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Une méthodologie de déploiement éprouvée
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
              Nous avons structuré une approche rigoureuse pour garantir le succès de votre transition vers Odoo, de la phase d'audit jusqu'au support post-lancement.
            </p>
            
            <div className="bg-brand-bg rounded-2xl p-8 border border-gray-100 mt-8">
              <h4 className="font-bold text-xl mb-4 text-gray-900">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3">
                {["Experts Odoo certifiés", "Accompagnement complet", "Expérience multi-secteurs", "Déploiement rapide", "Solutions évolutives"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-success" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="relative">
            {/* Minimal Timeline */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gray-100"></div>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-8 group"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center font-display font-bold text-gray-400 group-hover:border-brand-primary group-hover:text-brand-primary group-hover:scale-110 shadow-sm transition-all">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-3">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h4>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
