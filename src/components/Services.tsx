import { motion } from 'framer-motion';
import { Truck, Package, Globe, ChevronRight, Zap, Target, Bike } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Moto Frete Express',
      description: 'Entregas ultrarrápidas de documentos e pequenos volumes. Ideal para serviços bancários, cartórios, aeroportos e rotinas administrativas urgentes.',
      icon: <Bike className="w-10 h-10" />,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Logística de Delivery',
      description: 'Solução completa para Farmácias, Pizzarias, Restaurantes e Auto Peças. Implantamos uma operação dedicada com foco em redução de custos.',
      icon: <Package className="w-10 h-10" />,
      color: 'bg-brand-red',
      lightColor: 'bg-red-50',
      textColor: 'text-brand-red'
    },
    {
      title: 'Remessas Interestaduais',
      description: 'Atendimento especializado para além da grande São Paulo e interior. Logística estruturada para garantir que sua encomenda chegue intacta.',
      icon: <Globe className="w-10 h-10" />,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-gray-50 overflow-hidden relative">
      {/* Background Decor - Tire Tracks Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="tire-track" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M10 0 L10 100 M30 0 L30 100 M50 0 L50 100 M70 0 L70 100 M90 0 L90 100" stroke="black" strokeWidth="2" strokeDasharray="10 10" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tire-track)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-black uppercase tracking-widest mb-6"
            >
              Nossa Expertise
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Soluções Logísticas de <br/>
              <span className="text-brand-blue underline decoration-brand-blue/20">Alta Performance.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-sm mb-2">
            Infraestrutura moderna e equipe dedicada para cada modalidade de transporte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className={`w-20 h-20 ${service.lightColor} ${service.textColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-lg">
                {service.description}
              </p>
              
              <motion.a 
                href="#contato" 
                className={`flex items-center gap-2 font-black uppercase text-sm tracking-widest ${service.textColor} group-hover:gap-4 transition-all`}
              >
                Solicitar Cotação <ChevronRight size={18} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-around gap-12 p-12 bg-gray-900 rounded-[3rem] text-white shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-orange">
              <Zap size={24} />
            </div>
            <div>
              <div className="text-2xl font-black">24H / 7 DIAS</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Disponibilidade Total</div>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue">
              <Target size={24} />
            </div>
            <div>
              <div className="text-2xl font-black">PRECISÃO</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coleta e Entrega Pontual</div>
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-4 text-center md:text-left">
            <a href="tel:1150523563" className="bg-brand-red hover:bg-red-700 px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95">
              Falar com Comercial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
