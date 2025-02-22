"use client"
import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const planos = [
  {
    nome: "Gratuito",
    preco: { mensal: "R$ 0/mês", anual: "R$ 0/ano" },
    beneficios: [
      "15 produtos ativos",
      "5.000 visitas/mês"
    ],
    destaque: false
  },
  {
    nome: "Crescimento",
    preco: { mensal: "R$ 54/mês", anual: "R$ 43/mês" },
    beneficios: [
      "150 produtos ativos",
      "25.000 visitas/mês",
        "Checkout personalizado",
        "Integração com Google Analytics",
        "Suporte por e-mail"
    ],
    destaque: true
  },
  {
    nome: "Pro",
    preco: { mensal: "R$ 99/mês", anual: "R$ 79/mês" },
    beneficios: [
      "300 produtos ativos",
      "50.000 visitas/mês"
    ],
    destaque: false 
  }
  
];

const Subscriptions = () => {
  const [planoAnual, setPlanoAnual] = useState(false);

  return (
    <div className="flex flex-col items-center w-screen py-16 bg-gradient-to-b from-white to-white">
      
      <h2 className="text-3xl font-bold bg-fuchsia--900 text-center">
      Crie sua loja online e comece a vender hoje mesmo!
      </h2>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-gray-600">Mensal</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={planoAnual}
            onChange={() => setPlanoAnual(!planoAnual)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-fuchsia-500 rounded-full peer-checked:bg-fuchsia-700"></div>
        </label>
        <span className="text-gray-600">Anual</span>
      </div>

      {planoAnual &&(
        <p className="mt-2 text-sm text-fuchsia-900 bg-fuchsia-100 px-4 py-1 rounded-full">
        Economize 20% OFF e parcele em até 6x sem juros
      </p>
      )}

<div className="flex flex-wrap justify-center gap-6 mt-10">
  {planos.map((plano, index) => (
    <Card
      key={index}
      className={`w-72 p-6 text-center rounded-lg shadow-md transition-all flex flex-col min-h-full 
        ${plano.destaque ? "bg-fuchsia-700 text-white scale-105" : "bg-white"}`
      }
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">{plano.nome}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className={`text-2xl font-semibold ${plano.destaque ? "text-white" : "text-gray-700"}`}>
          {planoAnual ? plano.preco.anual : plano.preco.mensal}
        </p>
        <ul className="mt-4 space-y-2 text-left flex-grow">
          {plano.beneficios.map((beneficio, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className={`${plano.destaque ? "text-white" : "text-green-500"}`} size={18} />
              {beneficio}
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="mt-auto p-6">
        <Button 
          className={`w-full py-2 rounded-md text-lg 
            ${plano.destaque ? "bg-white text-fuchsia-700 hover:bg-gray-200" : "bg-fuchsia-700 text-white hover:bg-fuchsia-800"}`
          }
        >
          Criar minha loja
        </Button>
      </div>
    </Card>
  ))}
</div>

    </div>
  );
};

export default Subscriptions;
