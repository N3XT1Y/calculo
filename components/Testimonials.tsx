import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Lucas Ferreira",
      course: "Engenharia Civil",
      text: "Finalmente entendi! A explicação dela é mil vezes melhor do que a do meu professor. É como se ela soubesse exatamente onde a gente erra.",
      stars: 5
    },
    {
      name: "Mariana Costa",
      course: "Física",
      text: "Passei em Cálculo I com a maior nota da turma, e tudo graças aos macetes do curso. O módulo de limites salvou meu semestre.",
      stars: 5
    },
    {
      name: "Pedro Alves",
      course: "Ciência da Computação",
      text: "A didática é incrível. Direto ao ponto, sem enrolação teórica desnecessária. Valeu cada centavo.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">O que os alunos dizem</h2>
          <p className="text-slate-600 mt-2">Junte-se a quem já transformou a curva de aprendizado.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 text-emerald-500 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{review.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;