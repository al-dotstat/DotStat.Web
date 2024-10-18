import { AuthAvatar } from "@/entities/me";
import ALIcon from "@/shared/ui/icon/alIcon";
import { Basket } from "@/widgets/basket";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-5" />
      <header className="container shadow rounded mx-auto mb-5 bg-background">
        <nav className="flex justify-between items-center p-2">
          <span>.stat</span>
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
