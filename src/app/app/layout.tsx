import { AuthAvatar } from "@/entities/me";
import ALIcon from "@/shared/ui/icon/alIcon";
import { SearchWidget } from "@/widgets/search";
import LogoIcon from "@/shared/ui/icon/logoIcon";
import { Basket } from "@/widgets/basket";
import Link from "next/link";

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
      <footer className="bg-background shadow p-5 my-5 mx-auto rounded container self-end">
        <Link
          className="text-foreground flex gap-2 w-fit mx-auto"
          href="https://anemonlabs.ru"
          target="_blank"
        >
          <ALIcon size={30} />
          <div className="flex flex-col">
            <span className="text-sm text-foreground/75 leading-none">
              сайт сделал
            </span>
            <span className="text-md leading-none">AnemonLabs</span>
          </div>
        </Link>
      </footer>
    </div>
  );
}
