import { Truck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
              <Truck className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-xl tracking-tighter text-gray-900">
              COOPSTAR<span className="text-brand-red">EXPRESS</span>
            </span>
          </div>

          <p className="text-gray-500 font-bold text-sm text-center">
            &copy; {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span>Desenvolvido por</span>
            <a href="http://www.estudiocriarte.com.br" className="text-gray-600 hover:text-brand-blue transition-colors">Estúdio Criarte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
