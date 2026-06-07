import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Code2, BarChart3, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-brand-bg">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-primary/10 blur-[100px] mix-blend-multiply" />
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 border border-brand-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Experts Odoo & Transformation Digitale
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] tracking-tight font-display font-bold leading-[1.1] text-gray-900 mb-6">
            Transformez votre entreprise avec <span className="text-gradient">Odoo ERP</span> et l'innovation digitale
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
            Atlas Digital accompagne les entreprises marocaines dans leur croissance grâce à Odoo ERP, l'automatisation des processus, les développements sur mesure et les solutions intelligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Demander une Démo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/212611426133"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-sm"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              Consultation Gratuite
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-gray-900 font-bold text-base">Rejoint par +100 PME</div>
              <div>partout au Maroc</div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Mockup / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* Main Dashboard Card - Odoo Interface Replica */}
          <div className="relative z-20 rounded-xl overflow-hidden border border-gray-200/70 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] bg-white flex flex-col h-[440px]">
            {/* Window header */}
            <div className="h-8 bg-[#F3F4F6] flex items-center px-4 border-b border-gray-200 gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              <div className="mx-auto text-[10px] text-gray-400 font-mono flex-1 text-center pr-8">odoo.atlasdigital.ma</div>
            </div>
            
            {/* Odoo Navbar */}
            <div className="bg-[#714B67] text-white h-12 flex items-center justify-between px-4 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex flex-col justify-center gap-1 cursor-pointer">
                  <div className="h-0.5 bg-white/80 rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-full"></div>
                  <div className="h-0.5 bg-white/80 rounded w-full"></div>
                </div>
                <span className="font-semibold tracking-wide text-sm">Ventes</span>
                <div className="hidden sm:flex gap-3 text-xs text-white/70 ml-4 font-medium">
                  <span className="text-white relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-0.5 after:bg-white">Devis</span>
                  <span>Commandes</span>
                  <span>Clients</span>
                  <span>Produits</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=11" alt="avatar" />
                </div>
              </div>
            </div>

            {/* Odoo Sub-header / Breadcrumbs */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white shrink-0">
              <div>
                <h3 className="text-gray-800 text-lg font-medium">Devis</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input type="text" placeholder="Rechercher..." className="bg-gray-50 border border-gray-200 rounded pl-8 pr-3 py-1.5 text-xs w-48 focus:outline-none focus:border-[#714B67]" />
                  <Database className="w-3 h-3 absolute left-2.5 top-2.5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center px-4 py-2 border-b border-gray-100 bg-white shrink-0 gap-2">
               <button className="bg-[#714B67] text-white px-3 py-1.5 text-xs font-semibold rounded hover:bg-[#5B3D53] transition-colors">Nouveau</button>
               <button className="bg-white text-gray-700 border border-gray-300 px-3 py-1.5 text-xs font-medium rounded hover:bg-gray-50 transition-colors">Générer Facture</button>
               <span className="text-gray-300 ml-2">|</span>
               <div className="flex gap-1.5 ml-2 items-center">
                 <div className="w-2 h-2 rounded-full bg-[#00C48C]"></div>
                 <span className="text-[11px] text-gray-500 font-medium">Connecté</span>
               </div>
            </div>

            {/* Main Content Area - Kanban View */}
            <div className="flex-1 bg-[#F9F9FB] p-4 overflow-hidden flex gap-4 w-full">
              {/* Column 1 */}
              <div className="flex-1 max-w-[220px] flex flex-col gap-2">
                <div className="flex justify-between items-center px-1 mb-1">
                   <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider">Devis</h4>
                   <span className="bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold">3</span>
                </div>
                {/* Cards */}
                <div className="bg-white border border-gray-200 rounded shadow-sm p-3 border-l-[3px] border-l-[#4F8EF7] cursor-pointer hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-800 text-sm">SO0042</div>
                  <div className="text-xs text-gray-500 mt-1">Acme Corporation</div>
                  <div className="flex justify-between items-end mt-3">
                    <span className="text-gray-400 text-[10px] font-medium">Aujourd'hui</span>
                    <span className="font-bold text-gray-900 text-sm">MAD 45,000</span>
                  </div>
                </div>
                 <div className="bg-white border border-gray-200 rounded shadow-sm p-3 border-l-[3px] border-l-gray-300 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-800 text-sm">SO0043</div>
                  <div className="text-xs text-gray-500 mt-1">Tech Solutions Maroc</div>
                  <div className="flex justify-between items-end mt-3">
                    <span className="text-gray-400 text-[10px] font-medium">Hier</span>
                    <span className="font-bold text-gray-900 text-sm">MAD 12,500</span>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex-1 max-w-[220px] flex flex-col gap-2">
                <div className="flex justify-between items-center px-1 mb-1">
                   <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider">Envoyé</h4>
                   <span className="bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold">1</span>
                </div>
                {/* Cards */}
                <div className="bg-white border border-gray-200 rounded shadow-sm p-3 border-l-[3px] border-l-[#00C48C] cursor-pointer hover:shadow-md transition-shadow opacity-90">
                  <div className="font-bold text-gray-800 text-sm">SO0039</div>
                  <div className="text-xs text-gray-500 mt-1">Global Trade Industries</div>
                  <div className="flex justify-between items-end mt-3">
                    <span className="text-gray-400 text-[10px] font-medium">10/05/2026</span>
                    <span className="font-bold text-gray-900 text-sm">MAD 150,000</span>
                  </div>
                </div>
              </div>
              
              {/* Column 3 */}
              <div className="flex-1 max-w-[220px] flex flex-col gap-2">
                <div className="flex justify-between items-center px-1 mb-1">
                   <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider">Vente</h4>
                   <span className="bg-gray-200 text-gray-600 text-[10px] px-1.5 py-0.5 rounded font-bold">8</span>
                </div>
                 <div className="bg-white border border-gray-200 rounded shadow-sm p-3 border-l-[3px] border-l-[#714B67] cursor-pointer hover:shadow-md transition-shadow opacity-70">
                  <div className="font-bold text-gray-800 text-sm">SO0035</div>
                  <div className="text-xs text-gray-500 mt-1">Delta Logistics</div>
                  <div className="flex justify-between items-end mt-3">
                    <span className="text-gray-400 text-[10px] font-medium">02/05/2026</span>
                    <span className="font-bold text-gray-900 text-sm">MAD 89,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-12 z-30 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Odoo Studio</div>
              <div className="text-xs text-gray-500">Personnalisation active</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
