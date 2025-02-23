import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fuchsia-700 text-white py-10 w-screen">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Coluna 1 - Sobre */}
        <div>
          <h3 className="text-xl font-bold">Sobre Nós</h3>
          <p className="mt-2 text-sm text-gray-200">
            Somos uma empresa comprometida em oferecer o melhor serviço de delivery, conectando você aos seus produtos favoritos com rapidez e eficiência.
          </p>
        </div>

        {/* Coluna 2 - Contato */}
        <div>
          <h3 className="text-xl font-bold">Contato</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-300" />
              Rua Ainda Não Definida, 123 - Cidade, Estado
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-300" />
              (xx) xxxx-xxxx
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-300" />
              xxxxxxxx@xxxx.xxx
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Redes Sociais */}
        <div>
          <h3 className="text-xl font-bold">Redes Sociais</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-cyan-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cyan-500 mt-6 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
}
