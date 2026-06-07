import { motion } from 'motion/react';
import { 
  Users, ShoppingCart, Box, Calculator, 
  Settings, UserPlus, FileText, CheckCircle2 
} from 'lucide-react';

const categories = [
  {
    title: "Ventes & CRM",
    icon: <Users className="w-6 h-6" />,
    features: ["CRM & Relation Client", "Gestion des Ventes", "Devis & Facturation", "Point de Vente (POS)"]
  },
  {
    title: "Inventaire & Achats",
    icon: <Box className="w-6 h-6" />,
    features: ["Gestion des Stocks", "Inventaire Intelligent", "Gestion des Achats", "Multi-Entrepôts", "Codes-Barres Intégrés"]
  },
  {
    title: "Finance & Reporting",
    icon: <Calculator className="w-6 h-6" />,
    features: ["Comptabilité", "Trésorerie", "Rapports Avancés", "Tableaux de Bord KPI"]
  },
  {
    title: "Ressources & Projets",
    icon: <UserPlus className="w-6 h-6" />,
    features: ["Ressources Humaines", "Gestion de Projets", "Planning", "Helpdesk"]
  },
  {
    title: "Fabrication & Opérations",
    icon: <Settings className="w-6 h-6" />,
    features: ["Fabrication (MRP)", "Gestion Qualité", "Maintenance", "Multi-Sociétés"]
  },
  {
    title: "Marketing & Documents",
    icon: <FileText className="w-6 h-6" />,
    features: ["Marketing Automation", "Email & SMS Marketing", "Documents Numériques", "Signature Électronique"]
  }
];

export default function Services() {
  return (
    <section id="odoo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
            Déploiement Odoo ERP
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            L'écosystème complet pour <br className="hidden md:block"/>
            gérer votre entreprise
          </h3>
          <p className="text-lg text-gray-600">
            Atlas Digital implémente la suite d'applications métiers Odoo, parfaitement intégrées pour couvrir tous vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 hover:border-brand-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h4>
              <ul className="space-y-3">
                {cat.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
