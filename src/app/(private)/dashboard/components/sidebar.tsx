"use client";

import { Calendar, Home, LogOut,Package,Search, Settings, ShoppingCart  } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/dashboard/home", icon: Home },
  { title: "Pedidos", url: "/dashboard/pedidos", icon: ShoppingCart },
  { title: "Produtos", url: "/dashboard/produtos", icon: Package },
  { title: "Agenda", url: "/calendar", icon: Calendar },
  { title: "Pesquisar", url: "/search", icon: Search },
  { title: "Configurações", url: "/settings", icon: Settings },
];
export const SideBar = () => {

  return (
    <Sidebar className="h-screen w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => signOut()}
                  className="text-red-500 hover:bg-red-100"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
