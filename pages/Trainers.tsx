import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Trainer } from '../types';

interface TrainersProps {
  onNavigate: (page: string) => void;
}

const trainersList: Trainer[] = [
  { id: '1', name: 'Ricardo Silva', specialty: 'Bodybuilding & Força', image: 'https://picsum.photos/seed/trainer1/400/500' },
  { id: '2', name: 'Ana Costa', specialty: 'Cross & Funcional', image: 'https://picsum.photos/seed/trainer2/400/500' },
  { id: '3', name: 'Carlos Mendes', specialty: 'Artes Marciais', image: 'https://picsum.photos/seed/trainer3/400/500' },
  { id: '4', name: 'Julia Pereira', specialty: 'Yoga & Pilates', image: 'https://picsum.photos/seed/trainer4/400/500' },
];

export const Trainers: React.FC<TrainersProps> = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Time de Especialistas</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Profissionais altamente qualificados e apaixonados por ajudar você a alcançar sua melhor versão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersList.map((trainer) => (
            <div key={trainer.id} className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                <p className="text-vital-500 font-bold uppercase text-sm tracking-wider mb-4">{trainer.specialty}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-slate-300 hover:text-white"><Instagram size={20} /></a>
                  <a href="#" className="text-slate-300 hover:text-white"><Twitter size={20} /></a>
                  <a href="#" className="text-slate-300 hover:text-white"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};