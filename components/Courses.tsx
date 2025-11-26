import React from 'react';
import { BookOpen, Layers, Zap } from 'lucide-react';

interface CourseCardProps {
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  icon: React.ReactNode;
  highlightColor: string;
  isPopular?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, subtitle, description, topics, icon, highlightColor, isPopular }) => (
  <div className={`bg-white rounded-2xl p-8 border ${isPopular ? 'border-violet-500 shadow-xl shadow-violet-100 relative' : 'border-slate-100 shadow-lg'} hover:shadow-xl transition-shadow flex flex-col h-full`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
        Mais Vendido
      </div>
    )}
    <div className={`w-12 h-12 rounded-lg ${highlightColor} flex items-center justify-center mb-6 text-white`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-violet-600 font-medium text-sm mb-4">{subtitle}</p>
    <p className="text-slate-600 mb-6 flex-grow">{description}</p>
    
    <div className="space-y-3 mb-8">
      {topics.map((topic, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {topic}
        </div>
      ))}
    </div>

    <button className={`w-full py-3 rounded-lg font-bold transition-colors border-2 ${isPopular ? 'bg-violet-600 text-white border-violet-600 hover:bg-violet-700' : 'bg-white text-slate-900 border-slate-200 hover:border-violet-600 hover:text-violet-600'}`}>
      Saiba Mais
    </button>
  </div>
);

const Courses: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Escolha o seu Nível</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Do básico ao avançado, temos o material exato que você precisa para desbloquear sua aprovação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CourseCard
            title="Cálculo I"
            subtitle="Fundamentos e Limites"
            description="A base essencial. Domine limites e derivadas sem decorar fórmulas malucas."
            topics={['Pré-Cálculo Essencial', 'Limites e Continuidade', 'Derivadas na Prática', 'Aplicações de Derivadas']}
            icon={<BookOpen size={24} />}
            highlightColor="bg-slate-700"
          />
          <CourseCard
            title="Cálculo II"
            subtitle="Integrais e Aplicações"
            description="Entenda o somatório infinito e calcule áreas e volumes complexos com facilidade."
            topics={['Integrais Indefinidas', 'Técnicas de Integração', 'Integrais Definidas', 'Volumes e Áreas']}
            icon={<Layers size={24} />}
            highlightColor="bg-emerald-500"
          />
          <CourseCard
            title="Pacote Completo"
            subtitle="Proficiência em Cálculo (I, II e III)"
            description="A solução definitiva para engenheiros e cientistas. Tudo o que você precisa em um só lugar."
            topics={['Conteúdo de Calc I e II', 'Cálculo Vetorial', 'Séries e Sequências', 'Equações Diferenciais']}
            icon={<Zap size={24} />}
            highlightColor="bg-violet-600"
            isPopular={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;