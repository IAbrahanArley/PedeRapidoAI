import { CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Infos() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/atendimento.png"
            alt="Demonstração do Chat"
            width={800}
            height={800}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-fuchsia-700 md:text-4xl">
            Impulsione seu atendimento com inteligência!
          </h2>
          <p className="mt-4 text-gray-600">
            Nosso sistema automatiza suas interações, melhora o suporte ao
            cliente e aumenta suas conversões.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-fuchsia-700 p-2">
                <MessageCircle className="text-white" />
              </div>
              <p className="text-gray-700">
                Atendimento automatizado 24/7 com respostas inteligentes.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-fuchsia-700 p-2">
                <CheckCircle className="text-white" />
              </div>
              <p className="text-gray-700">
                Sugestões personalizadas com base no histórico do cliente.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-fuchsia-700 p-2">
                <CheckCircle className="text-white" />
              </div>
              <p className="text-gray-700">
                Campanhas automatizadas para promoções e engajamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
