import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="quem-somos" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe Coopstar" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Info Cards for About Section */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white">
                <Clock size={20} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight">Agilidade<br/>Garantida</div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -left-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-gray-900 leading-tight">Segurança<br/>Total</div>
            </motion.div>

            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-brand-blue p-8 rounded-3xl shadow-2xl text-white transform rotate-3">
              <div className="text-5xl font-black">+9</div>
              <div className="text-sm font-bold uppercase tracking-tighter leading-tight">Anos de<br/>Experiência</div>
            </div>
            {/* Decors */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red opacity-10 rounded-full blur-3xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-brand-blue rounded-full text-sm font-black uppercase tracking-widest mb-6">
              Nossa História
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Mais que entregas,<br/>
              <span className="text-brand-blue">entregamos compromisso.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A <span className="font-bold text-gray-900">Coopstar Express</span> é uma empresa especializada no serviço de entregas e coletas estratégica, atuando desde 2015 como pilar logístico em São Paulo.
              </p>
              <p>
                Oferecemos ótimos serviços e desempenhamos uma função vital para nossos parceiros: <span className="bg-brand-orange/10 text-brand-orange px-2 py-1 rounded font-bold underline decoration-brand-orange/30">Agilizar processos complexos</span>, tornando-nos braço direito de indústrias, comércios e empresas de serviços.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors group">
                <Users className="text-brand-blue w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">Equipe Especializada</h4>
                  <p className="text-sm text-gray-500">Profissionais treinados para garantir o êxito da sua entrega.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-colors group">
                <Award className="text-brand-red w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">Foco em Resultados</h4>
                  <p className="text-sm text-gray-500">Agendamento com hora marcada e precisão total.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
