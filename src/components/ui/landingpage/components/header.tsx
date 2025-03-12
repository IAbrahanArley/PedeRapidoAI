"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = (url: string) => {
    navigation.push(url);
  };

  return (
    <nav
      className={`fixed left-1/2 top-0 z-50 flex -translate-x-1/2 transform items-center justify-center px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "w-11/12 rounded-full bg-white py-3 shadow-lg backdrop-blur-md md:mt-5"
          : "w-full bg-transparent py-6"
      }`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logoSemNome.png" alt="Logo" width={70} height={70} />
          <span className="text-lg font-semibold">PedeRapido Ai</span>
        </div>

        <div className="hidden gap-6 font-medium text-gray-700 md:flex">
          <a
            href="#funcionalidades"
            className="transition hover:text-fuchsia-800"
          >
            Funcionalidades
          </a>
          <a href="#planos" className="transition hover:text-fuchsia-800">
            Planos
          </a>
        </div>

        <div className="hidden md:flex">
          <Button
            variant="outline"
            onClick={() => navigate("/auth")}
            className="rounded-full border-2 border-fuchsia-800 bg-opacity-0 px-6 py-2 text-fuchsia-800 hover:bg-fuchsia-800 hover:text-white"
          >
            Teste grátis
          </Button>
        </div>

        <div className="md:hidden">
          {menuOpen ? (
            <X
              className="h-8 w-8 cursor-pointer text-fuchsia-800"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              className="h-8 w-8 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-28 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-lg transition-all duration-300 md:hidden">
            <a
              href="#funcionalidades"
              className="text-gray-700 transition hover:text-fuchsia-800"
            >
              Funcionalidades
            </a>
            <a
              href="#planos"
              className="text-gray-700 transition hover:text-fuchsia-800"
            >
              Planos
            </a>
            <Button
              variant="outline"
              className="rounded-full border-2 border-fuchsia-800 bg-opacity-0 px-6 py-2 text-fuchsia-800 hover:bg-fuchsia-800 hover:text-white"
            >
              Teste grátis
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
