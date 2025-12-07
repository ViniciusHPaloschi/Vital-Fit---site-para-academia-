import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { ClassInfo } from '../types';
import { Button } from '../components/Button';

interface ClassesProps {
  onNavigate: (page: string) => void;
}

const classesList: ClassInfo[] = [
  { id: '1', title: 'Cross Training', description: 'Alta intensidade para queimar calorias e ganhar força explosiva.', schedule: 'Seg-Sex: 07:00, 18:00', image: 'https://picsum.photos/seed/crossfit/600/400' },
  { id: '2', title: 'Yoga Flow', description: 'Equilíbrio entre corpo e mente, melhorando flexibilidade e postura.', schedule: 'Ter-Qui: 08:00, 19:30', image: 'https://picsum.photos/seed/yoga/600/400' },
  { id: '3', title: 'Boxe', description: 'Técnica e condicionamento físico em um treino intenso e desestressante.', schedule: 'Seg-Qua-Sex: 19:00', image: 'https://picsum.photos/seed/boxing/600/400' },
  { id: '4', title: 'Spinning', description: 'Treino cardiovascular intenso simulando percursos de bike.', schedule: 'Seg-Qua: 18:30', image: 'https://picsum.photos/seed/cycling/600/400' },
  { id: '5', title: 'Musculação', description: 'Área completa com instrutores para hipertrofia e força.', schedule: 'Diariamente: 06:00 - 23:00', image: 'https://picsum.photos/seed/gym/600/400' },
  { id: '6', title: 'Dance Mix', description: 'Divirta-se e queime calorias com coreografias modernas.', schedule: 'Sábados: 10:00', image: 'https://picsum.photos/seed/dance/600/400' },
];

export const Classes: React.FC<ClassesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Nossas Modalidades</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Oferecemos uma variedade de aulas para manter sua rotina de exercícios dinâmica, desafiadora e divertida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {classesList.map((cls) => (
            <div key={cls.id} className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-vital-500 transition-all group hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <div className="h-48 overflow-hidden relative">
                <img src={cls.image} alt={cls.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm p-2 rounded-lg text-vital-400">
                  <Clock size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{cls.title}</h3>
                <p className="text-slate-400 mb-4 text-sm h-10">{cls.description}</p>
                <div className="flex items-start gap-2 text-vital-300 text-sm font-semibold bg-slate-800 p-3 rounded-xl">
                  <Calendar size={16} className="mt-0.5 shrink-0" />
                  <span>{cls.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Não encontrou o que procurava?</h3>
              <p className="text-slate-400">Nossa equipe pode montar um treino personalizado para você.</p>
            </div>
            <Button onClick={() => onNavigate('contact')}>
              FALE COM UM CONSULTOR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};