import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, Calculator } from 'lucide-react';

const AiTutor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        Você é um tutor especialista de Cálculo 1, 2 e 3 para universitários. 
        Seu estilo é "De aluno para aluno": descontraído, direto, encorajador e muito didático.
        Responda à seguinte pergunta do aluno de forma breve (máximo 1 parágrafo) e dê uma dica prática "macete".
        Pergunta: ${question}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setAnswer(response.text || "Desculpe, tive um problema ao calcular sua resposta. Tente novamente!");
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setAnswer("Ops! Parece que minha calculadora neural pifou. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl overflow-hidden">
          <div className="bg-slate-800 rounded-[22px] p-8 md:p-12 border border-slate-700">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-violet-600/20 text-violet-400 rounded-xl mb-4">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Experimente Nossa Didática com IA
              </h2>
              <p className="text-slate-400">
                Está travado em algum conceito? Pergunte ao nosso "Monitor Virtual" e veja como simplificamos tudo.
              </p>
            </div>

            <form onSubmit={handleAsk} className="relative mb-8">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: Qual o macete para Regra da Cadeia? ou O que é uma Integral?"
                className="w-full bg-slate-900 text-white placeholder-slate-500 rounded-xl py-4 pl-6 pr-14 border border-slate-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
              />
              <button 
                type="submit" 
                disabled={loading || !question}
                className="absolute right-2 top-2 p-2 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-700 text-white rounded-lg transition-colors"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </form>

            {answer && (
              <div className="bg-slate-900 rounded-xl p-6 border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 mt-1">
                    <Calculator size={20} />
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold text-sm mb-1 uppercase tracking-wide">Resposta do Monitor</h4>
                    <p className="text-slate-200 leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {!answer && !loading && (
               <div className="text-center text-slate-500 text-sm">
                 *Esta é uma demonstração gratuita usando tecnologia Gemini para simular nossa metodologia.
               </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTutor;