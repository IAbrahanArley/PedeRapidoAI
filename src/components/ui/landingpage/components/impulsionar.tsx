import Image from "next/image";

export default function ImpulsioneVendas() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 p-8 md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-fuchsia-900 md:text-3xl">
          Impulsione suas vendas!
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
      <div className="flex flex-1 justify-center">
        <Image
          src="/impulsionar.png"
          alt="Assistente Virtual"
          width={300}
          height={300}
          className="max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
}
