import { CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";


export default function Infos() {
  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
          src={""}
            alt="Demonstração do Chat"
            className="max-w-sm rounded-lg shadow-lg"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-700">
            Impulsione seu atendimento com inteligência!
          </h2>
          <p className="mt-4 text-gray-600">
            Nosso sistema automatiza suas interações, melhora o suporte ao cliente e aumenta suas conversões.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-fuchsia-700 p-2 rounded-full">
                <MessageCircle className="text-white" />
              </div>
              <p className="text-gray-700">Atendimento automatizado 24/7 com respostas inteligentes.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-fuchsia-700 p-2 rounded-full">
                <CheckCircle className="text-white" />
              </div>
              <p className="text-gray-700">Sugestões personalizadas com base no histórico do cliente.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-fuchsia-700 p-2 rounded-full">
                <CheckCircle className="text-white" />
              </div>
              <p className="text-gray-700">Campanhas automatizadas para promoções e engajamento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
