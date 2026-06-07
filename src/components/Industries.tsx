import { motion } from 'motion/react';
import { Building2, Laptop, ShoppingCart, Truck, Factory, HeartPulse, GraduationCap, Building } from 'lucide-react';

const industries = [
  { name: "Commerce & Distribution", icon: <ShoppingCart /> },
  { name: "Industrie & Production", icon: <Factory /> },
  { name: "Santé & Médical", icon: <HeartPulse /> },
  { name: "Services", icon: <Building2 /> },
  { name: "Transport & Logistique", icon: <Truck /> },
  { name: "Éducation", icon: <GraduationCap /> },
  { name: "BTP & Construction", icon: <Building /> },
  { name: "E-commerce & Tech", icon: <Laptop /> },
];

export default function Industries() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-brand-accent font-bold tracking-wider uppercase mb-3">
            Secteurs d'activité
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Odoo s'adapte à votre industrie
          </h3>
          <p className="text-xl text-white/80 font-light">
            De la PME à la Grande Entreprise, nous déployons des solutions scalables adaptées aux régulations et contraintes de votre marché au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all cursor-default group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-brand-accent transition-all">
                {ind.icon}
              </div>
              <h4 className="text-white font-medium">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
