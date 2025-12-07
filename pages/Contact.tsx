import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the data to a backend
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">Matricule-se Agora</h1>
            <p className="text-slate-300 text-lg mb-12">
              Dê o primeiro passo para sua transformação. Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-vital-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Localização</h3>
                  <p className="text-slate-400">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-vital-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Telefone / WhatsApp</h3>
                  <p className="text-slate-400">(11) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-vital-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                  <p className="text-slate-400">contato@vitalfit.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-vital-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Horário de Funcionamento</h3>
                  <p className="text-slate-400">Seg - Sex: 06h às 23h<br/>Sáb - Dom: 08h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-vital-500/20 text-vital-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Solicitação Enviada!</h3>
                <p className="text-slate-300 mb-8">
                  Obrigado pelo interesse. Um de nossos consultores entrará em contato pelo WhatsApp em breve.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Enviar nova solicitação</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Ficha de Interesse</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nome</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Sobrenome</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all" placeholder="Seu sobrenome" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input required type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all" placeholder="exemplo@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Telefone / WhatsApp</label>
                  <input required type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Plano de Interesse</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all">
                    <option>Plano Básico</option>
                    <option>Plano Pro (Mais Popular)</option>
                    <option>Plano Elite</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Mensagem (Opcional)</label>
                  <textarea rows={3} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-vital-500 focus:ring-1 focus:ring-vital-500 outline-none transition-all" placeholder="Gostaria de agendar para hoje..."></textarea>
                </div>

                <Button fullWidth size="lg" type="submit">
                  <Send size={18} className="mr-2" />
                  ENVIAR SOLICITAÇÃO
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};