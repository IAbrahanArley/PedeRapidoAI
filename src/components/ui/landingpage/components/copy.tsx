import { BarChart3, Bolt, CheckCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
const Copy = () => {
    return ( 
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Transforme suas vendas com o <span className="text-fuchsia-800">PedeRápido AI</span>
          </h1>
          <p className="text-lg text-gray-600">
            Nossa plataforma foi projetada para ajudar você a vender mais, gerenciar melhor seu negócio e aumentar sua produtividade.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="text-fuchsia-800" size={20} />
              Automatize seus pedidos e ganhe tempo
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <BarChart3 className="text-fuchsia-800" size={20} />
              Acompanhe suas vendas em tempo real
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Bolt className="text-fuchsia-800" size={20} />
              Sistema rápido e eficiente, sem complicação
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <ShieldCheck className="text-fuchsia-800" size={20} />
              Segurança e confiabilidade para seu negócio
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <BarChart3 className="text-fuchsia-800" size={20} />
              Ajudamos a melhorar o seu faturamento
            </li>
          </ul>
          <Button className="bg-fuchsia-800 text-white px-6 py-3 rounded-full hover:bg-fuchsia-900">
            Saiba mais
          </Button>
        </div>
     );
}
 
export default Copy;