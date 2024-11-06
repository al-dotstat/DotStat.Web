import { AuthAvatar } from "@/entities/me";
import { SearchWidget } from "@/widgets/search";
import LogoIcon from "@/shared/ui/icon/logoIcon";
import { Basket } from "@/widgets/basket";
import Link from "next/link";
import { Footer } from "@/shared/ui/layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-5 container shadow rounded mx-auto mb-5 bg-background z-30">
        <nav className="flex justify-between items-center h-16 p-2">
          <Link href="/app" className="flex items-end">
            <LogoIcon size={50} />
          </Link>
          <div className="max-w-80 w-full">
            <SearchWidget />
          </div>
          <div className="flex gap-2 items-center">
            <Basket />
            <AuthAvatar />
          </div>
        </nav>
      </header>
      <div className="container m-auto mt-5">{children}</div>
      <Footer />
    </div>
  );
}
