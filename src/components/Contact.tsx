import { MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-brand-primary tracking-wider uppercase mb-3">
              Contactez-Nous
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Prêt à accélérer votre croissance ?
            </h3>
            <p className="text-lg text-gray-600 mb-10 font-light">
              Discutons de votre projet. Nos experts analysent vos besoins et vous proposent une démonstration gratuite des capacités d'Odoo pour votre secteur.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Téléphone</div>
                  <div className="font-bold text-gray-900">+212 611 42 61 33</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm border border-gray-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="font-bold text-gray-900">contact@atlasdigital.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Localisation</div>
                  <div className="font-bold text-gray-900">Marrakech, Maroc</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/212611426133"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BE5C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageSquare className="w-6 h-6" />
              Discuter sur WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="Nom de l'entreprise" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="jean@exemple.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all" placeholder="+212 6XX XX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Votre Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none" placeholder="Détaillez votre projet ou vos besoins..."></textarea>
              </div>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-colors">
                Envoyer la demande
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
