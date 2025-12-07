import React from 'react';
import { Zap, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    { icon: <Zap size={32} />, title: "Equipamentos Premium", desc: "Maquinário de última geração para maximizar seus resultados." },
    { icon: <Users size={32} />, title: "Comunidade Forte", desc: "Ambiente motivador com pessoas focadas em evoluir." },
    { icon: <Trophy size={32} />, title: "Treinadores Elite", desc: "Profissionais certificados prontos para criar seu plano." },
  ];

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gymdark/1920/1080" 
            alt="Academia Vital Fit" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-vital-500/20 text-vital-400 border border-vital-500/30 text-sm font-bold tracking-wider mb-6">
            A EVOLUÇÃO COMEÇA AQUI
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            TRANSFORME SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-400 to-vital-600">CORPO</span>,<br />
            DOMINE SUA <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-400 to-vital-600">MENTE</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            Não é apenas sobre levantar peso. É sobre superar seus limites todos os dias na Vital Fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('pricing')}
            >
              COMEÇAR AGORA
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('classes')}
            >
              CONHECER AULAS
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-vital-500/50 transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-vital-500 mb-6 group-hover:bg-vital-500 group-hover:text-slate-900 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-vital-900 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Pronto para começar?</h2>
            <p className="text-vital-200 text-lg">Agende sua aula experimental gratuita hoje mesmo.</p>
          </div>
          <Button size="lg" onClick={() => onNavigate('contact')} className="group">
            AGENDAR AULA GRÁTIS
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};