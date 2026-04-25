import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Quais regiões são atendidas pela Coopstar?",
    answer: "Atendemos toda a Capital de São Paulo, Grande São Paulo, ABCD e interior. Para destinos de longa distância, consulte nossa tabela especial de quilometragem."
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos 24 horas por dia, de segunda a segunda-feira. Todas as coletas e entregas podem ser agendadas com hora marcada para sua conveniência."
  },
  {
    question: "Vocês transportam grandes volumes ou mudanças?",
    answer: "Nosso foco principal é o serviço de Moto Frete e Delivery de encomendas leves (documentos, eletrônicos, medicamentos, alimentos). Para volumes que exijam utilitários, entre em contato para verificarmos disponibilidade."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Oferecemos faturamento mensal para empresas cadastradas, além de pagamentos via PIX ou dinheiro no ato da coleta/entrega."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-brand-blue mx-auto mb-4 opacity-50" />
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Perguntas Frequentes</h2>
          <p className="text-gray-500 font-medium tracking-tight">Tire suas dúvidas rápidas sobre nossos serviços e prazos.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border transition-all duration-300 ${
                activeIndex === index ? 'border-brand-blue shadow-xl shadow-brand-blue/5' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold ${activeIndex === index ? 'text-brand-blue' : 'text-gray-900'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transform transition-transform duration-300 ${
                  activeIndex === index ? 'bg-brand-blue text-white rotate-180' : 'bg-gray-100 text-gray-400'
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
