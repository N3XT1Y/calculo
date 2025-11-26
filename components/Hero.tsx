import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  // Initial count simulates existing student base (e.g., 1200+) plus some random starting point
  const [studentCount, setStudentCount] = useState(1247);
  const [isIncrementing, setIsIncrementing] = useState(false);

  useEffect(() => {
    // Function to simulate random new enrollments
    const interval = setInterval(() => {
      // 40% chance to add a new student every 3 seconds
      if (Math.random() > 0.6) {
        setStudentCount(prev => prev + 1);
        setIsIncrementing(true);
        
        // Reset animation state
        setTimeout(() => setIsIncrementing(false), 1000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-slate-900 text-white pt-20 pb-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-sm font-medium mb-6">
            <CheckCircle2 size={16} />
            <span className="flex items-center gap-1">
              Método testado e aprovado por 
              <span className={`font-bold text-white transition-all duration-300 ${isIncrementing ? 'text-emerald-200 scale-110' : ''}`}>
                {studentCount.toLocaleString()}
              </span>
              alunos
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Pare de temer a prova de Cálculo. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">
              Aprenda com quem entende a sua jornada.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
            De um estudante para outro: domine o Cálculo sem complicações. 
            Aulas focadas em didática prática, exercícios de fixação e a linguagem descomplicada de quem já esteve no seu lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Quero Dominar o Cálculo Agora!
              <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white rounded-xl font-medium text-lg transition-all">
              Ver os Cursos
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;