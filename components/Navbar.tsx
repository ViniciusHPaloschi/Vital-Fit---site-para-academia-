import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'classes', label: 'Modalidades' },
    { id: 'trainers', label: 'Treinadores' },
    { id: 'pricing', label: 'Planos' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 group focus:outline-none"
        >
          <Dumbbell className="text-vital-500 transition-transform group-hover:rotate-12" size={32} />
          <span className="text-2xl font-extrabold tracking-tighter text-white">
            VITAL<span className="text-vital-500">FIT</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                currentPage === link.id 
                  ? 'text-vital-500' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-5 py-2 rounded-full font-bold text-sm border transition-all ${
              currentPage === 'contact'
                ? 'bg-vital-500 text-slate-900 border-vital-500'
                : 'bg-slate-800 text-white border-slate-600 hover:border-vital-500 hover:text-vital-400'
            }`}
          >
            Matricule-se
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-200 hover:text-vital-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium text-left ${
                currentPage === link.id ? 'text-vital-500' : 'text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center py-3 rounded-lg bg-vital-600 text-white font-bold mt-2"
          >
            Matricule-se Agora
          </button>
        </div>
      )}
    </nav>
  );
};