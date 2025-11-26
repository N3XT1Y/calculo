import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-gradient-to-r from-violet-900 to-slate-800 rounded-3xl p-8 md:p-16 text-center mb-16 border border-violet-800/50 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Deixe o Cálculo Ser a sua <br/> Pedra no Caminho.
          </h2>
          <p className="text-violet-200 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de estudantes que já transformaram a curva de aprendizado e garantiram a aprovação.
          </p>
          <button className="px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold text-xl transition-all shadow-lg shadow-violet-600/40 inline-flex items-center gap-3 transform hover:scale-105">
            Garantir Minha Vaga e Começar Hoje!
            <ArrowRight />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-slate-400 text-sm">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">CalcMaster</h3>
            <p className="max-w-xs">
              De estudante para estudante. Simplificando a matemática universitária com didática prática e foco em resultados.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Login Aluno</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} CalcMaster. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;