import { useState, useEffect } from 'react';
import { Truck, Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-brand-red shadow-red-200 shadow-lg' : 'bg-brand-red/20 backdrop-blur-sm'
            }`}>
              <Truck className="text-white w-7 h-7" />
            </div>
            <span className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              COOPSTAR<span className="text-brand-red">EXPRESS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <div className={`flex items-center gap-8 font-semibold text-sm uppercase tracking-widest ${
              isScrolled ? 'text-gray-600' : 'text-gray-100'
            }`}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-brand-red transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <a 
              href="tel:1150523563"
              className={`flex items-center gap-3 font-bold px-5 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-brand-red text-white shadow-brand-red/20 shadow-xl hover:scale-105' 
                  : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
              }`}
            >
              <Phone size={18} className="animate-pulse" /> 
              <span>(11) 5052-3563</span>
            </a>
          </div>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-gray-800 text-xl font-bold border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:1150523563"
            className="bg-brand-red text-white text-center py-4 rounded-xl font-bold shadow-lg"
          >
            Ligar Agora: (11) 5052-3563
          </a>
        </div>
      )}
    </nav>
  );
};
