import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck, Truck, ClipboardCheck } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      title: 'Solicitação',
      desc: 'Entre em contato via telefone ou formulário para detalhar sua necessidade.',
      icon: <PhoneCall className="w-8 h-8" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Agendamento',
      desc: 'Definimos o horário exato da coleta para otimizar sua rotina.',
      icon: <CalendarCheck className="w-8 h-8" />,
      color: 'bg-brand-red'
    },
    {
      title: 'Coleta / Retirada',
      desc: 'Nosso profissional chega no local e horário combinado com segurança.',
      icon: <Truck className="w-8 h-8" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Entrega Final',
      desc: 'Sua encomenda chega ao destino com confirmação imediata.',
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="processo" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-gray-100 text-gray-500 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            Workflow
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Como Trabalhamos</h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Um fluxo simplificado e transparente para garantir que sua logística nunca falhe.
          </p>
        </div>

        <div className="relative">
          {/* Stylized Road Path (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-2 bg-gray-100 z-0 overflow-hidden rounded-full">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-40 h-full bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-20"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                <div className={`w-24 h-24 ${step.color} text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gray-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-4 border-gray-50 text-gray-900 rounded-full flex items-center justify-center font-black text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
