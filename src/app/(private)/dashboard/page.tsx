import DashboardLayout from "../dashboard/components/dashboard";
import { SidebarProvider } from "./contexts/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </SidebarProvider>
  );
};

export default Layout;
