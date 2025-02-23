"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect,useState } from "react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-4 flex items-center justify-center transition-all duration-300 z-50 ${
      scrolled
        ? "bg-white shadow-lg backdrop-blur-md py-3 md:mt-5 w-11/12 rounded-full"
        : "bg-transparent py-6 w-full"
    }`}
  >
    <div className="w-full max-w-7xl flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/logoSemNome.png" alt="Logo" width={70} height={70} />
        <span className="font-semibold text-lg">PedeRapido Ai</span>
      </div>
  
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#funcionalidades" className="hover:text-fuchsia-800 transition">Funcionalidades</a>
        <a href="#planos" className="hover:text-fuchsia-800 transition">Planos</a>
      </div>
  
      <div className="hidden md:flex">
        <Button variant="outline" className="bg-opacity-0 border-fuchsia-800 text-fuchsia-800 border-2 px-6 py-2 rounded-full hover:bg-fuchsia-800 hover:text-white">
          Teste grátis
        </Button>
      </div>
  
      <div className="md:hidden">
        {menuOpen ? (
          <X className="w-8 h-8 cursor-pointer text-fuchsia-800" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>
  
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-4 md:hidden transition-all duration-300">
          <a href="#funcionalidades" className="text-gray-700 hover:text-fuchsia-800 transition">Funcionalidades</a>
          <a href="#planos" className="text-gray-700 hover:text-fuchsia-800 transition">Planos</a>
          <Button variant="outline" className="bg-opacity-0 border-fuchsia-800 text-fuchsia-800 border-2 px-6 py-2 rounded-full hover:bg-fuchsia-800 hover:text-white">
            Teste grátis
          </Button>
        </div>
      )}
    </div>
  </nav>
  
  );
}
