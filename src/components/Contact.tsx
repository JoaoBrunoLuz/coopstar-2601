import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock as ClockIcon, Navigation } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-50/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Solicite sua Coleta</h2>
            <p className="text-gray-500 mb-10 font-medium">Preencha os campos abaixo e entraremos em contato imediatamente.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 ml-1">Nome / Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Ex: João Silva ou Empresa Ltda" 
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-brand-blue focus:bg-white transition-all font-medium" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 ml-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="contato@exemplo.com" 
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-brand-blue focus:bg-white transition-all font-medium" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 ml-1">Assunto / Serviço</label>
                <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-brand-blue focus:bg-white transition-all font-medium">
                  <option>Moto Frete Express</option>
                  <option>Delivery Dedicado</option>
                  <option>Entrega Fora da Capital</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2 ml-1">Mensagem</label>
                <textarea 
                  placeholder="Como podemos ajudar com sua logística?" 
                  rows={4} 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-brand-blue focus:bg-white transition-all font-medium"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-black text-xl py-5 rounded-2xl shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-3 transition-colors"
              >
                Enviar Solicitação <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-red-50 text-brand-red rounded-full text-sm font-black uppercase tracking-widest mb-6">
                Canais Diretos
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 tracking-tighter">Nossa Base Operacional</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-brand-blue transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">Endereço</h4>
                    <p className="text-gray-500 font-medium text-lg leading-snug">Av. Jurucê, 898 - Moema<br/>São Paulo - SP</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-brand-blue font-bold text-sm mt-2 block hover:underline">Ver no Google Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-brand-red transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">Telefones 24h</h4>
                    <p className="text-gray-500 font-medium text-lg tracking-tight">(11) 5052-3563 / 5051-4442</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-brand-orange transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">E-mail Comercial</h4>
                    <p className="text-gray-500 font-medium text-lg">coopstar_express@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group border-t border-gray-100 pt-8">
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center shrink-0">
                    <ClockIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-500 font-medium text-lg">Ininterrupto: 24h por dia, 7 dias por semana.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Maps & Distance Calculation Section */}
      <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="grid lg:grid-cols-3">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="w-16 h-16 bg-brand-blue rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue/20">
                <Navigation className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Logística & Distância</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Para orçamentos de frete precisos, utilize nossa base como ponto de partida. Calcule a distância exata até o seu destino.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.google.com/maps/dir//Av.+Jurucê,+898+-+Moema,+São+Paulo+-+SP" 
                target="_blank"
                rel="noreferrer"
                className="bg-white text-gray-900 px-8 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3"
              >
                CALCULAR DISTÂNCIA
              </motion.a>
            </div>
            <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] relative">
              <iframe 
                title="Localização Coopstar Express"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3223321516016!2d-46.66699312384784!3d-23.61070266399478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a09289547d7%3A0xc39281a17960350!2sAv.%20Juruc%C3%A9%2C%20898%20-%20Moema%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004083-001!5e0!3m2!1spt-BR!2sbr!4v1713470000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 contrast-125 brightness-75 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-gray-900/10 rounded-r-[3rem] hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
