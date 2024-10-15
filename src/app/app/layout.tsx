import { AuthAvatar } from "@/entities/me";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-background shadow">
        <nav className="flex justify-between items-center p-2 container m-auto">
          <span>.stat</span>
          <AuthAvatar />
        </nav>
      </header>
      <div className="container m-auto mt-5">{children}</div>
    </>
  );
}
