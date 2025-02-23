import { ClipboardCheck,MessageCircle, Utensils } from "lucide-react";

export default function DeliveryInfo() {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-700">
          Como funciona o nosso <span className="text-fuchsia-900">#delivery</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-fuchsia-700 w-16 h-16" />
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              <span className="text-fuchsia-700">01</span> Atendimento via WhatsApp
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              O cliente recebe, via WhatsApp, um link para acessar o seu cardápio digital. Além disso, um assistente virtual pode esclarecer dúvidas iniciais ou direcionar a conversa para um atendente humano, proporcionando um atendimento ágil e eficiente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <Utensils className="text-fuchsia-700 w-16 h-16" />
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              <span className="text-fuchsia-700">02</span> Realização do Pedido
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              O cliente navega pelo cardápio digital e seleciona os itens desejados sem a necessidade de cadastro prévio. O sistema notifica todas as atualizações do pedido diretamente pelo WhatsApp, garantindo um acompanhamento em tempo real.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <ClipboardCheck className="text-fuchsia-700 w-16 h-16" />
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold">
              <span className="text-fuchsia-700">03</span> Gestão e Entrega do Pedido
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Após a confirmação do pedido, o sistema gerencia todas as etapas da preparação até a entrega, mantendo o cliente informado sobre o status da compra através de notificações automatizadas no WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
