import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Odoo ERP', href: '#odoo' },
    { name: 'Développement', href: '#development' },
    { name: 'Web & E-commerce', href: '#web' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl shadow-lg group-hover:shadow-brand-primary/30 transition-all overflow-hidden">
            {/* Mountain / Digital A Logo */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2400/svg" className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
              <path d="M12 3L4 19H8.5L12 11L15.5 19H20L12 3Z" fill="currentColor"/>
              <circle cx="12" cy="11" r="2" fill="#4F8EF7"/>
              <circle cx="8.5" cy="19" r="1.5" fill="#4F8EF7"/>
              <circle cx="15.5" cy="19" r="1.5" fill="#4F8EF7"/>
            </svg>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-gray-900 flex items-center">
            Atlas<span className="text-brand-primary font-black">Digital.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/212611426133"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#20BE5C] transition-colors shadow-md shadow-[#25D366]/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            WhatsApp
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-4 border-t border-gray-100 flex flex-col md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4 pb-2 border-t border-gray-100 mt-2">
              <a
                href="https://wa.me/212611426133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold shadow-md shadow-[#25D366]/20"
              >
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
