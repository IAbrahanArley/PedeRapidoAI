"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

import { Navbar } from "./navbar";
import { SideBar } from "./sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <SideBar />

        <div className="flex flex-1 flex-col">
          <Navbar />

          <main className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
