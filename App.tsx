import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FitnessAI } from './components/FitnessAI';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Dumbbell } from 'lucide-react';

// Pages
import { Home } from './pages/Home';
import { Classes } from './pages/Classes';
import { Trainers } from './pages/Trainers';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'classes':
        return <Classes onNavigate={navigateTo} />;
      case 'trainers':
        return <Trainers onNavigate={navigateTo} />;
      case 'pricing':
        return <Pricing onNavigate={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-vital-500 selection:text-slate-900 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <FitnessAI />

      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* FOOTER - Visible on all pages */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Dumbbell className="text-vital-500" size={32} />
                <span className="text-2xl font-extrabold text-white">VITAL<span className="text-vital-500">FIT</span></span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                A melhor estrutura da região para você alcançar seus objetivos. 
                Venha fazer uma aula experimental gratuita.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-vital-500 hover:bg-vital-500 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-vital-500 hover:bg-vital-500 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-vital-500 hover:bg-vital-500 transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-vital-500" />
                  Av. Paulista, 1000 - SP
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-vital-500" />
                  (11) 99999-8888
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-vital-500" />
                  Seg-Sex: 06h - 23h<br/>Sáb-Dom: 08h - 18h
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => navigateTo('home')} className="hover:text-vital-500 transition-colors">Início</button></li>
                <li><button onClick={() => navigateTo('classes')} className="hover:text-vital-500 transition-colors">Modalidades</button></li>
                <li><button onClick={() => navigateTo('trainers')} className="hover:text-vital-500 transition-colors">Treinadores</button></li>
                <li><button onClick={() => navigateTo('pricing')} className="hover:text-vital-500 transition-colors">Planos</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-vital-500 transition-colors">Matrícula</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Vital Fit. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;