import { Footer } from "@/shared/ui/layout";
import { AdminSidebar } from "@/widgets/adminSIdebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container m-auto mt-5 flex gap-5 max-lg:flex-col">
        <AdminSidebar />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
