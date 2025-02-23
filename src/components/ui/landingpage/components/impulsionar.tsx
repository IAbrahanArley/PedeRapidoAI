import Image from "next/image";

export default function ImpulsioneVendas() {
    return (
      <div className=" p-8 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-fuchsia-900">Impulsione suas vendas!</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <span className="text-3xl font-bold text-fuchsia-700">10x</span>
              <p className="text-gray-700">Atendimento 10x mais rápido</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-fuchsia-700">60%</span>
              <p className="text-gray-700">Incremento de até 60% nos pedidos</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-fuchsia-700">99%</span>
              <p className="text-gray-700">de respostas garantidas</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="" alt="Assistente Virtual" className="max-w-xs md:max-w-sm" />
        </div>
      </div>
    );
  }
  