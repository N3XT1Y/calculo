import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-4 border-violet-500 rounded-full transform -translate-x-2 -translate-y-2"></div>
                <img 
                  src="https://picsum.photos/400/400" 
                  alt="Ana Silva - Instrutora" 
                  className="w-full h-full object-cover rounded-full border-4 border-slate-900 relative z-10"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-emerald-400 font-bold tracking-wider uppercase mb-2">Conheça Sua Mentora</p>
              <h2 className="text-3xl font-bold mb-6">De Aluna para Aluno(a).</h2>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-violet-500 mb-6 italic text-slate-300">
                "Minha missão é desmistificar o Cálculo. Eu sofri com professores teóricos demais, então criei o método que eu gostaria de ter tido: direto ao ponto e focado na prática."
              </div>

              <h3 className="text-xl font-bold text-white mb-1">Ana Silva</h3>
              <p className="text-slate-400 mb-6">Estudante Sênior de Engenharia Aeroespacial • CR 9.8 em Matemáticas</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <span className="px-4 py-2 bg-slate-700 rounded-full text-sm text-slate-200">Monitora há 3 anos</span>
                 <span className="px-4 py-2 bg-slate-700 rounded-full text-sm text-slate-200">Olimpíada de Matemática (Olimpíada)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;