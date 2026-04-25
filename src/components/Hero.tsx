import { motion } from 'framer-motion';
import { ChevronRight, Clock, ShieldCheck, Zap, Bike, Map, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gray-950">
      {/* Background with optimized image and rich overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Delivery rider in the city" 
          className="w-full h-full object-cover brightness-[0.3] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-950/60 to-transparent"></div>
        {/* Speed lines effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="100 200" className="animate-[pulse_3s_linear_infinite]" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="50 150" className="animate-[pulse_4s_linear_infinite]" />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="200 400" className="animate-[pulse_5s_linear_infinite]" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-blue/20 backdrop-blur-xl border border-brand-blue/30 text-blue-300 mb-8 font-black text-xs uppercase tracking-[0.2em]">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />)}
              </div>
              LOGÍSTICA INTELIGENTE 24H
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-white mb-8 leading-[0.85] tracking-tighter">
              AGILIDADE<br/>
              <span className="text-gray-400">EFICAZ E</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-brand-red animate-gradient-x">
                SEGURANÇA
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">
              A força do motofrete paulistano unida à tecnologia. Entregamos confiança há mais de 12 anos.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(204, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#contato" 
                className="group bg-brand-red text-white px-10 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3"
              >
                SOLICITAR COLETA 
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#servicos" 
                className="bg-white/10 text-white backdrop-blur-xl border-2 border-white/10 px-10 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3"
              >
                VER SERVIÇOS
              </motion.a>
            </div>

            {/* Bottom Badges */}
            <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-orange/50 transition-colors">
                  <Zap size={22} className="text-brand-orange" />
                </div>
                <div>
                  <div className="font-black text-white text-sm uppercase tracking-wider">Express</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Coleta em 30min</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-green-400/50 transition-colors">
                  <ShieldCheck size={22} className="text-green-400" />
                </div>
                <div>
                  <div className="font-black text-white text-sm uppercase tracking-wider">Seguro</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Carga Vigiada</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Visual Elements */}
          <div className="relative hidden lg:flex justify-center items-center h-[600px]">
            {/* Central Moto Icon/Circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="relative z-20 w-80 h-80 bg-gradient-to-br from-brand-blue to-brand-darkBlue rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,102,204,0.5)] flex flex-col items-center justify-center p-8 border border-white/20"
            >
              <Bike size={120} className="text-white mb-6 drop-shadow-2xl" />
              <div className="text-center">
                <div className="text-4xl font-black text-white leading-none">MOTO</div>
                <div className="text-xl font-bold text-blue-200 uppercase tracking-widest">EXPRESS</div>
              </div>
            </motion.div>

            {/* Floating Cards to fill space */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 z-30 bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-2xl skew-x-3"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Map size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-lg leading-tight tracking-tighter">RASTREIO REALTIME</div>
                  <div className="text-green-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" /> ONLINE
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 z-30 bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-2xl -skew-x-3"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-lg leading-tight tracking-tighter">9.8/10 RATING</div>
                  <div className="text-brand-orange text-xs font-bold uppercase tracking-widest">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
