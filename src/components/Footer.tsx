export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg shadow-lg overflow-hidden">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg" className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <path d="M12 3L4 19H8.5L12 11L15.5 19H20L12 3Z" fill="currentColor"/>
                  <circle cx="12" cy="11" r="2" fill="#4F8EF7"/>
                  <circle cx="8.5" cy="19" r="1.5" fill="#4F8EF7"/>
                  <circle cx="15.5" cy="19" r="1.5" fill="#4F8EF7"/>
                </svg>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center">
                Atlas<span className="text-brand-primary font-black">Digital.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experts Odoo ERP & Transformation Digitale. Nous accompagnons les entreprises marocaines vers l'excellence opérationnelle.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#odoo" className="hover:text-brand-primary transition-colors">Déploiement Odoo</a></li>
              <li><a href="#development" className="hover:text-brand-primary transition-colors">Développement Sur-mesure</a></li>
              <li><a href="#web" className="hover:text-brand-primary transition-colors">Sites & E-commerce</a></li>
              <li><a href="#web" className="hover:text-brand-primary transition-colors">Intelligence Artificielle</a></li>
              <li><a href="#web" className="hover:text-brand-primary transition-colors">Hébergement Sécurisé</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Entreprise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Marrakech, Maroc</li>
              <li><a href="tel:+212611426133" className="hover:text-brand-primary transition-colors">+212 611 42 61 33</a></li>
              <li><a href="mailto:contact@atlasdigital.com" className="hover:text-brand-primary transition-colors">contact@atlasdigital.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Atlas Digital. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
