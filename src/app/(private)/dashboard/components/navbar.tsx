"use client";

import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <h1 className="text-xl font-bold">Painel de Controle</h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex cursor-pointer items-center gap-2">
            <Avatar>
              <AvatarImage src={session?.user?.image || ""} alt="Perfil" />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <span className="font-medium">{session?.user?.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => console.log("Configurações")}>
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
