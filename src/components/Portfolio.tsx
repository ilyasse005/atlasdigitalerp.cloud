import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Transformation ERP Globale",
    client: "Leader de la Distribution",
    category: "Odoo ERP",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Portail E-commerce B2B",
    client: "Industrie Manufacturière",
    category: "Dev Sur-mesure",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop"
  },
  {
    title: "Application Métier Connectée",
    client: "Groupe Logistique",
    category: "Application & API",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
              Notre Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Des réalisations qui parlent d'elles-mêmes
            </h3>
          </div>
          <button className="flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors">
            Voir tous nos projets <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                  {project.category}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-500 font-medium">Pour {project.client}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
