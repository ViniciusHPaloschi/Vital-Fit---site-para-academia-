import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingPlan } from '../types';
import { Button } from '../components/Button';

interface PricingProps {
  onNavigate: (page: string) => void;
}

const plans: PricingPlan[] = [
  { id: '1', name: 'Básico', price: '89,90', features: ['Acesso à musculação', 'Horário livre', 'Sem taxa de matrícula', 'Acesso a 1 unidade'] },
  { id: '2', name: 'Pro', price: '129,90', features: ['Acesso total + Aulas', 'Convite para amigo (2x/mês)', 'Avaliação física trimestral', 'Acesso a todas unidades'], recommended: true },
  { id: '3', name: 'Elite', price: '199,90', features: ['Tudo do plano Pro', 'Personal Trainer (4x/mês)', 'Nutricionista inclusa', 'Kit Vital Fit exclusivo', 'Estacionamento VIP'] },
];

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 animate-fade-in relative">
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-vital-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Invista em Você</h1>
          <p className="text-slate-400">Escolha o plano que melhor se adapta aos seus objetivos.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 rounded-3xl border flex flex-col h-full ${
                plan.recommended 
                  ? 'bg-slate-800 border-vital-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] scale-105 z-10' 
                  : 'bg-slate-950 border-slate-800 hover:border-slate-600'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-vital-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-sm text-slate-400">R$</span>
                  <span className="text-5xl font-black text-white mx-1">{plan.price}</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <div className="p-1 rounded-full bg-vital-500/20 text-vital-500 mr-3 mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                fullWidth 
                variant={plan.recommended ? 'primary' : 'outline'}
                onClick={() => onNavigate('contact')}
              >
                ESCOLHER {plan.name.toUpperCase()}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Dúvidas sobre os planos?</h3>
            <p className="text-slate-400 mb-6">Nossa equipe está pronta para explicar cada detalhe e benefício.</p>
            <Button variant="secondary" onClick={() => onNavigate('contact')}>FALAR COM CONSULTOR</Button>
        </div>
      </div>
    </div>
  );
};