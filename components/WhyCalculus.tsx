import React from 'react';
import { Target, TrendingUp, BrainCircuit } from 'lucide-react';

const WhyCalculus: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 rounded-full text-sm font-semibold mb-6">
              Por que investir nisso?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Não é só passar na prova. <br />
              <span className="text-violet-600">É pensar como um engenheiro.</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              O Cálculo é a linguagem do universo físico. Dominá-lo agora significa liberdade acadêmica e profissional no futuro.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Sem dores de cabeça</h4>
                  <p className="text-slate-600">Passe pelas matérias de base sem o sofrimento habitual. Entenda a lógica, não apenas a mecânica.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Oportunidades de Elite</h4>
                  <p className="text-slate-600">Abra portas para estágios em P&D e projetos complexos que exigem modelagem matemática sólida.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center text-violet-600">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Resolução de Problemas Reais</h4>
                  <p className="text-slate-600">Deixe de ver números e comece a ver taxas de variação, otimização e acumulação no mundo real.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-emerald-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Estudantes estudando cálculo" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCalculus;