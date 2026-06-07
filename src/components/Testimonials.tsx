import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Youssef Alaoui",
    role: "Directeur Général, Industrie M.",
    content: "L'intégration d'Odoo par Atlas Digital a littéralement transformé notre gestion de production. L'automatisation des MRP et la clarté des tableaux de bord nous font gagner un temps précieux chaque jour.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sara Benali",
    role: "Fondatrice, E-commerce Store",
    content: "Une équipe à l'écoute et extrêmement réactive. Ils ont développé des connecteurs sur-mesure pour notre boutique en ligne et Odoo, tout fonctionne en parfaite synchronisation.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Karim Tazi",
    role: "CFO, Groupe Logistique",
    content: "Passer à Odoo avec Atlas Digital a été la meilleure décision pour notre département finance. La comptabilité multi-sociétés est fluide et les reportings sont enfin en temps réel.",
    image: "https://i.pravatar.cc/150?img=33"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent tracking-wider uppercase mb-3">
            Témoignages Clients
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ils nous font confiance
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic">"{testi.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full border border-white/20" />
                <div>
                  <h4 className="font-bold text-white">{testi.name}</h4>
                  <p className="text-sm text-gray-400">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
