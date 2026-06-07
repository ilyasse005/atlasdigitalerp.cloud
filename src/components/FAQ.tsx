import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Qu'est-ce qu'Odoo ERP ?", a: "Odoo est une suite d'applications d'entreprise open-source qui couvre tous les besoins de votre société : CRM, e-commerce, comptabilité, inventaire, point de vente, gestion de projet, etc." },
  { q: "Pourquoi choisir Odoo plutôt qu'un autre ERP ?", a: "Odoo est reconnu pour sa grande flexibilité, sa modernité, sa facilité d'utilisation et surtout son modèle modulaire. Vous ne payez/installez que ce que vous utilisez." },
  { q: "Combien de temps dure un déploiement typique ?", a: "Un déploiement standard peut prendre entre 4 et 12 semaines selon la taille de votre entreprise et la complexité de vos processus. Les développements sur-mesure peuvent étendre cette durée." },
  { q: "Proposez-vous des développements sur mesure ?", a: "Absolument. En tant qu'experts Odoo, nous créons des modules personnalisés, des connecteurs API et modifions le code source pour qu'Odoo s'adapte parfaitement à vos processus métier uniques." },
  { q: "Pouvez-vous migrer mes données existantes vers Odoo ?", a: "Oui, nous gérons la migration complète de vos données (clients, produits, comptabilité, historiques) depuis vos anciens systèmes vers Odoo de façon sécurisée." },
  { q: "Assurez-vous la formation des utilisateurs ?", a: "Oui, la formation accompagne chaque livraison de module. Nous nous assurons que vos équipes maîtrisent l'outil pour garantir une adoption parfaite." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
            Questions Fréquentes
          </h2>
          <h3 className="text-4xl font-display font-bold text-gray-900">
            Foire aux questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-brand-bg hover:border-brand-primary/20 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === idx ? 'rotate-180 text-brand-primary' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
