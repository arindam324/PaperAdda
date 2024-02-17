import Header from "@/components/user/dashboard/Header";
import Sidebar from "@/components/user/dashboard/Sidebar";

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

export default function UserDashboardLayout({
  children,
}: UserDashboardLayoutProps) {
  return (
    <main className="w-full  flex min-h-screen bg-gray-300">
      <Sidebar />
      <div className="w-full">
        <div className="pl-6">
          <Header />
        </div>
        {children}
      </div>
    </main>
  );
}
